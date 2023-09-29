import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donations from "../Pages/Donations/Donations";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Category from "../Pages/Category/Category";




const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/categories.json')
            },
            {
                path:"/donations",
                element:<Donations></Donations>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/categories/:id",
                element :<Category></Category>,
                loader:() => fetch('/categories.json')
            },
           
        ]
    }
])

export default myCreateRoute;