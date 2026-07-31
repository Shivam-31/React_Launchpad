import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import Home from './component/home/home.jsx'
import Contact from './component/Contact-us/Contact.jsx'
// import Github, { githubInfoLoader } from './component/Github/Github.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import CreateProject from './pages/CreateProject.jsx'
import Projects from './pages/Projects.jsx';
import { Navigate } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      
    {
    path: "github/:username",   
    element: <Github />,
    loader: githubInfoLoader
},

{
    path: "github",
    element: <Navigate to="/github/Shivam-31" replace />   // 👈 Default username
},
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "create-project",    // 👈 NAYA ROUTE
        element: <CreateProject />
      },
      {
  path: "projects",
  element: <Projects />
}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)