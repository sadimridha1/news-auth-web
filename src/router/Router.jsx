import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/home/Home";
import Login from "../share/login/Login";
import Register from "../share/register/Register";
import NewsDetails from "../pages/newsDetails/NewsDetails";
import PrivateDetails from "../pages/details/PrivateDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('news.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/newsdetails',
                element: <PrivateDetails><NewsDetails></NewsDetails></PrivateDetails>
            }
        ]
        
    }
])

export default router;