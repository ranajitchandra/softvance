import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
import App from "../App";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children: [
                {
                    path: "/",
                    element: <>dfsdfsdfsd</>
                },
                {
                    path: "/dashboard",
                    element: <App></App>
                },
                {
                    path: "register",
                    element: <></>
                }

            ]
        },
        {
            path: "*",
            element: <></>
        }
    ]
)


