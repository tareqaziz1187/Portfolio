import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import About from "../Pages/About/About";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [
      { index: true,
        Component:Home 
        
        },
      { path: "/projectdetail/:id",
         Component:ProjectDetails
      },
      {
        path:"/contact",
        Component:Contact

      },
      {
        path:"/projects",
        Component:Projects

      },
      {
        path:"/about",
        Component:About

      }
    ],
  },
]);