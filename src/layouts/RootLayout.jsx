
import { Outlet } from "react-router";
// App.js or any other component
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function RootLayout() {


    
        useEffect(() => {
            AOS.init({
                duration: 1000, // Animation duration in milliseconds
                offset: 100, // Offset from the trigger point
                easing: "ease-in-out", // Animation easing
                delay: 100, // Delay in milliseconds
                once: true, // Whether animation should happen only once
            });
        }, []);

        return (
            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>
        )
    }