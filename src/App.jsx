import Home from "./components/Home";
import SignUp from "./components/SignUp";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <SignUp />
    },
    {
      path:'/home',
      element: <Home />
    }
  ])
  
  return (
    <>
      {/* <SignUp /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
