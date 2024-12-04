import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import MainLayout from "./components/Layout/mainLayout";
import HeroSection from "./components/HeroSection/heroSection";
import Project from "./components/Project/project";

const appRouter = createBrowserRouter([{
  path: "/",
    element: <MainLayout />,
    children: [{
      path: "/",
      element: <HeroSection />,
},
{
  path: "/project",
  element: <Project/>,
}],
}])

function App() {

  return (

  <>
 <RouterProvider router={appRouter}></RouterProvider>
 </>
  )
}

export default App
