import Project from '../models/Project.js';

// ------------------- CREATE PROJECT -------------------
export const createProject = async (req, res) => {
  try {
    const { title, description, techStack, maxTeamSize, repository } = req.body;
    
    // Owner = logged in user (req.userId auth middleware se aayega)
    const project = new Project({
      title,
      description,
      techStack,
      owner: req.userId,
      maxTeamSize: maxTeamSize || 5,
      repository: repository || '',
      team: [req.userId] // Owner automatically team mein add
    });

    await project.save();

    res.status(201).json({
      success: true,
      message: 'Project created successfully!',
      project
    });

  } catch (error) {
    console.error('Create Project Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// ------------------- GET ALL PROJECTS -------------------
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ isActive: true })
      .populate('owner', 'name email')
      .populate('team', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      projects
    });

  } catch (error) {
    console.error('Get Projects Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ------------------- GET SINGLE PROJECT -------------------
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('owner', 'name email github')
      .populate('team', 'name email github');

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.status(200).json({
      success: true,
      project
    });

  } catch (error) {
    console.error('Get Project Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ------------------- UPDATE PROJECT -------------------
export const updateProject = async (req, res) => {
  try {
    const { title, description, techStack, maxTeamSize, status, repository } = req.body;
    
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check karo ki logged in user hi owner hai
    if (project.owner.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to update this project'
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, techStack, maxTeamSize, status, repository },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Project updated successfully!',
      project: updatedProject
    });

  } catch (error) {
    console.error('Update Project Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ------------------- DELETE PROJECT -------------------
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check karo ki logged in user hi owner hai
    if (project.owner.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to delete this project'
      });
    }

    // Hard delete ya soft delete (isActive = false)
    project.isActive = false;
    await project.save();

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully!'
    });

  } catch (error) {
    console.error('Delete Project Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// ------------------- JOIN PROJECT -------------------
export const joinProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check karo project open hai?
    if (project.status !== 'open') {
      return res.status(400).json({
        success: false,
        message: 'This project is not accepting new members'
      });
    }

    // Check karo team mein already hai?
    if (project.team.includes(req.userId)) {
      return res.status(400).json({
        success: false,
        message: 'You are already a member of this project'
      });
    }

    // Check karo team full hai?
    if (project.team.length >= project.maxTeamSize) {
      return res.status(400).json({
        success: false,
        message: 'Team is full'
      });
    }

    // Add user to team
    project.team.push(req.userId);
    await project.save();

    res.status(200).json({
      success: true,
      message: 'Successfully joined the project!',
      project
    });

  } catch (error) {
    console.error('Join Project Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};