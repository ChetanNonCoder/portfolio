import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import MainLayout from "./components/Layout/mainLayout";
import Home from "./components/Home/home";
import Project from "./components/Project/project";
import Profile from "./components/Profile/profile";

const appRouter = createBrowserRouter([{
  path: "/",
    element: <MainLayout />,
    children: [{
      path: "/",
      element: <Home/>,
},
{
  path: "/project",
  element: <Project/>,
},
{
  path: "/profile",
  element:<Profile/>
}
],
}])

function App() {

  return (

  <>
 <RouterProvider router={appRouter}></RouterProvider>
 </>
  )
}

export default App
