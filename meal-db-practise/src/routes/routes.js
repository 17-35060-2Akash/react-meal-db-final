import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Meals from "../components/Meals/Meals";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/meals',
                element: <Meals></Meals>
            }
        ]
    },


]);