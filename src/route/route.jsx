import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
import App from "../App";
import Register from "../authPage/Register";
import VerifyOtp from "../authPage/VerifyOtp";
import Login from "../authPage/Login";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children: [
                {
                    path: "/",
                    element: <>Home</>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/dashboard",
                    element: <App></App>
                },
                {
                    path: "/register",
                    element: <Register></Register>
                },
                {
                    path: "/verify-otp",
                    element: <VerifyOtp></VerifyOtp>
                }

            ]
        },
        {
            path: "*",
            element: <>Error</>
        }
    ]
)


