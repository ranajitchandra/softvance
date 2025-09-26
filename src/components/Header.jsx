import React from 'react'

export default function Header() {
    return (
        <header className=" px-8 lg:px-20">
            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="ScapeSync Logo"
                        className="h-15 w-auto"
                    />
                </div>

                {/* Right Button */}
                <a
                    href="#"
                    className="px-6 py-2 rounded-md bg-green-600 text-white font-semibold  hover:bg-green-700 transition"
                >
                    Get Started
                </a>
            </div>
        </header>
    )
}
