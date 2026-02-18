import { createBrowserRouter } from "react-router-dom";
import JobsList from "./pages/JobsList";
import JobDetails from "./pages/JobDetails";
import Tracker from "./pages/Tracker";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <JobsList />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
      {
        path: "/tracker",
        element: <Tracker />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
