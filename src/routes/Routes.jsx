import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Career from "../pages/CareerPage/Career";
import Details from "../pages/HomePage/News/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "career",
        element: <Career></Career>,
      },
      {
        path: "/details/:_id",
        element: <Details></Details>,
        loader: () => fetch("news.json"),
      },
    ],
  },
]);
export default Routes;
