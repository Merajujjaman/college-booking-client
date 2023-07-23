import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "../assets/pages/Home/Home";
import CollegeDetails from "../assets/pages/Details/CollegeDetails";
import Colleges from "../assets/pages/Colleges/Colleges";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/colleges",
                element: <Colleges></Colleges>
            },
            {
                path: "/collegeDelails/:id",
                element: <CollegeDetails></CollegeDetails>
            }
        ]
    },
]);

export default router;