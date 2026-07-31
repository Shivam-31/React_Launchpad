import express from 'express';
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  joinProject
} from '../controllers/projectController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Sab routes protected hain (login zaroori)
router.use(protect);

router.route('/')
  .get(getAllProjects)     // GET /api/projects
  .post(createProject);    // POST /api/projects

router.route('/:id')
  .get(getProjectById)     // GET /api/projects/:id
  .put(updateProject)      // PUT /api/projects/:id
  .delete(deleteProject);  // DELETE /api/projects/:id

router.post('/:id/join', joinProject); // POST /api/projects/:id/join

export default router;