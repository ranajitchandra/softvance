import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
import App from "../App";
import Register from "../authPage/Register";
import VerifyOtp from "../authPage/VerifyOtp";
import Login from "../authPage/Login";
import ForgotPassword from "../authPage/ForgotPassword";
import ForgotVerifyOtp from "../authPage/ForgotVerifyOtp";
import ResetPassword from "../authPage/ResetPassword";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children: [
                {
                    path: "/",
                    element: <Login></Login>
                },
                {
                    path: "/forgot-password",
                    element: <ForgotPassword></ForgotPassword>
                },
                {
                    path: "/forgot-verify-otp",
                    element: <ForgotVerifyOtp></ForgotVerifyOtp>
                },
                {
                    path: "/reset-password",
                    element: <ResetPassword></ResetPassword>
                },
                {
                    path: "/dashboard",
                    element: <PrivateRoute><App></App></PrivateRoute> 
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


