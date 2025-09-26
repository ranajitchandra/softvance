import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative bg-[#0b4030] text-white overflow-hidden">

            {/* Background Wave Pattern */}
            <div className="absolute inset-0">
                <img
                    src="/footer-wave.png"
                    className="hidden lg:block w-full h-auto md:h-full bg-cover"
                    alt="Footer-wave"
                />
            </div>
            {/* Content */}
            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-center p-6 md:p-12 lg:px-20 lg:py-26">
                    {/* Logo & Description */}
                    <div className="">
                        <div className="flex items-center space-x-3">
                            <img src="/footer-logo.png" alt="ScapeSync Logo" />
                        </div>
                    </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                            Your all-in-one platform for job scheduling, employee
                            management, and client service built to keep your business
                            running smoothly from anywhere.
                        </p>

                    {/* App Store Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/3">
                        <a
                            href="#"
                            className="flex items-center gap-4 border border-green-500 rounded-lg px-4 py-2 hover:bg-green-600 transition w-full sm:w-auto"
                        >
                            <img src="/apple-logo.png" alt="App Store" className="w-6 h-6" />
                            <div className="flex flex-col leading-tight">
                                <span className="text-xs">Download on the</span>
                                <span className="text-base font-semibold">App Store</span>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-4 border border-green-500 rounded-lg px-4 py-2 hover:bg-green-600 transition w-full sm:w-auto"
                        >
                            <img
                                src="/playstore-logo.png"
                                alt="Google Play"
                                className="w-6 h-6"
                            />
                            <div className="flex flex-col leading-tight">
                                <span className="text-xs">Download on the</span>
                                <span className="text-base font-semibold">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center lg:justify-start space-x-6 text-xl px-6 md:px-12 md:pb-10 lg:px-20 pb-6">
                    <a href="#" className="hover:text-green-400">
                        <FaYoutube />
                    </a>
                    <a href="#" className="hover:text-green-400">
                        <FaXTwitter />
                    </a>
                    <a href="#" className="hover:text-green-400">
                        <FaFacebook />
                    </a>
                    <a href="#" className="hover:text-green-400">
                        <FaInstagram />
                    </a>
                </div>

                <hr className="border-t border-gray-700" />

                {/* Bottom Copyright */}
                <div className="px-6 md:px-12 lg:px-20 text-center lg:text-left text-gray-500 text-sm">
                    © 2021-2025, ScapeSync. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
