import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonial() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="bg-white p-6 lg:p-20">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    What Our Users Are Saying
                </h2>
                <p className="mt-3 text-gray-600">
                    Real stories from clients, employees, and business owners who use our
                    app every day.
                </p>

                {/* Testimonials Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 8px 25px rgba(34,197,94,0.4)",
                        }}
                        transition={{
                            scale: { type: "spring", stiffness: 300, damping: 20 },
                            boxShadow: { duration: 0.3 },
                        }}
                        data-aos="fade-up"
                        className="bg-white p-6 rounded-2xl shadow-md text-left relative"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src="/Ellipse-1.png"
                                alt="User 1"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">
                                    Farzana H.
                                </h4>
                                <p className="text-xs text-gray-500">
                                    Owner, CleanPro Services
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm">
                            This app completely changed the way we manage our team. Assigning
                            jobs takes minutes, and we never miss an update.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 8px 25px rgba(34,197,94,0.4)",
                        }}
                        transition={{
                            scale: { type: "spring", stiffness: 300, damping: 20 },
                            boxShadow: { duration: 0.3 },
                        }}
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="bg-white p-6 rounded-2xl shadow-md text-left relative"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src="/Ellipse-2.png"
                                alt="User 2"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">Ahmed R.</h4>
                                <p className="text-xs text-gray-500">Technician</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm">
                            I love how easy it is to see my daily tasks and track my time. It
                            makes my job stress-free.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 8px 25px rgba(34,197,94,0.4)",
                        }}
                        transition={{
                            scale: { type: "spring", stiffness: 300, damping: 20 },
                            boxShadow: { duration: 0.3 },
                        }}
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="bg-white p-6 rounded-2xl shadow-md text-left relative"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src="/Ellipse-3.png"
                                alt="User 3"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">
                                    Rafiq M.
                                </h4>
                                <p className="text-xs text-gray-500">Homeowner</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm">
                            As a client, I love being able to see exactly when my service is
                            on the way. No calls, no guessing — just clear updates.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
