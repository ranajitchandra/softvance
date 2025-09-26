import React from "react";
import { useNavigate } from "react-router";
import { logout } from "../api/auth";
import Swal from "sweetalert2";

export default function Header() {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const navigate = useNavigate();

    async function handleLogout() {
        const token = localStorage.getItem("token");

        try {
            await logout(token);
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            // ✅ SweetAlert success (auto close, no confirmation button)
            Swal.fire({
                icon: "success",
                title: "Logout Successful",
                text: "You have been logged out successfully.",
                timer: 2000,
                showConfirmButton: false,
            });

            navigate("/");
        } catch (err) {
            console.error("Logout failed:", err.response?.data || err.message);
        }
    }

    return (
        <header className="px-8 lg:px-20">
            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src="/logo.png" alt="ScapeSync Logo" className="h-15 w-auto" />
                </div>

                {/* Right Section */}
                <div>
                    <span className="mr-4 text-gray-700">
                        Hello, {user || "User"}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition cursor-pointer"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
}
