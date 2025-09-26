import React from "react";
import { motion } from "framer-motion";

export default function Products() {
    return (
        <div>
            {/* Top Heading Section */}
            <motion.div
                className="text-center space-y-3 px-4 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Wrap h2 in relative container */}
                <div className="relative inline-block">
                    <h2 className="text-3xl md:text-5xl font-bold">Build for Everyone</h2>
                    <img
                        src="/underline-2.png"
                        alt="decorative underline"
                        className="hidden lg:block absolute left-80 -translate-x-1/2 top-full mt-0 w-60"
                    />
                </div>

                <p className="max-w-md md:max-w-2xl mx-auto mt-4 text-gray-600 text-sm md:text-base">
                    Whether you're booking services, managing tasks, or running
                    operations, we've designed the perfect experience for you.
                </p>
            </motion.div>
                {/* Section 1 */}
                <section className="relative overflow-hidden py-10 px-8 lg:px-20 flex flex-col lg:flex-row items-center my-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50/95 via-white to-green-50/95" />
                    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

                    {/* Left Content */}
                    <motion.div
                        className="relative z-10 lg:w-1/2 w-full space-y-3"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <span className="px-4 py-1 mb-3 inline-block rounded-full border border-green-500 text-green-600 font-medium bg-green-50">
                            Users
                        </span>
                        <h2 className="relative text-3xl md:text-2xl font-bold text-gray-900 leading-snug block">
                            Book services, track progress <br /> and stay updated.
                            {/* Underline image */}
                            <img
                                src="/Frame.png"
                                alt="decorative underline"
                                className="hidden lg:block absolute left-1/2 -translate-x-1/2 -translate-y-55 top-full mt-2 w-60"
                            />
                        </h2>
                        <p className="text-gray-600 text-md mb-6">
                            Easily schedule appointments, get real-time updates, and enjoy a
                            smooth, transparent service experience.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-sm">
                                <span className="w-1 h-6 bg-green-500 mr-3 rounded" />
                                Book services in seconds
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="w-1 h-6 bg-green-500 mr-3 rounded" />
                                Track real-time job updates
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="w-1 h-6 bg-green-500 mr-3 rounded" />
                                Schedule appointments at your convenience
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="relative z-10 lg:w-1/2 w-full h-auto flex justify-center mt-10 lg:mt-0"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/Frame-1.png"
                            alt="decorative underline"
                            className="hidden lg:block absolute left-90 w-60"
                        />
                        <img
                            src="Rectangle.png"
                            alt="App Preview"
                            className="w-[300px] md:w-[380px] lg:w-[450px] transform rotate-0 drop-shadow-2xl 
              [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] 
              [mask-repeat:no-repeat] [mask-size:100%_100%] lg:mt-10"
                        />
                    </motion.div>
                </section>

                {/* Section 2 (Image Left + Text Right) */}
                <section className="relative overflow-hidden py-10 px-8 lg:px-20 flex flex-col-reverse lg:flex-row items-center my-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50" />
                    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

                    {/* Left Image */}
                    <motion.div
                        className="relative z-10 lg:w-1/2 w-full h-auto flex justify-center mt-10 lg:mt-0"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="Rectangle-2.png"
                            alt="App Preview"
                            className="w-[300px] md:w-[380px] lg:w-[450px] transform rotate-0 drop-shadow-2xl 
              [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] 
              [mask-repeat:no-repeat] [mask-size:100%_100%] lg:mt-10"
                        />
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        className="relative z-10 lg:w-1/2 w-full space-y-3"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <span className="px-4 py-1 mb-3 inline-block rounded-full border border-green-500 text-green-600 font-medium bg-green-50">
                            Business Owners
                        </span>
                        <h2 className="text-3xl md:text-2xl font-bold text-gray-900 leading-snug">
                            Assign jobs, monitor performance, and <br /> streamline operations.
                        </h2>
                        <p className="text-gray-600 text-md mb-6">
                            Gain full control of your workforce with real-time tracking, smart
                            scheduling, and service management in one app.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-sm">
                                <span className="w-1 h-6 bg-green-500 mr-3 rounded" />
                                Assign jobs to the right team member
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="w-1 h-6 bg-green-500 mr-3 rounded" />
                                Monitor performance in real time
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="w-1 h-6 bg-green-500 mr-3 rounded" />
                                Manage clients and services seamlessly
                            </li>
                        </ul>
                    </motion.div>
                </section>


            {/* Section 3 */}
            <section className="relative overflow-hidden py-10 px-8 lg:px-20 flex flex-col lg:flex-row items-center my-2">
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50" />
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

                {/* Left Content */}
                <motion.div
                    className="relative z-10 lg:w-1/2 w-full space-y-3"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <span className="px-4 py-1 mb-3 inline-block rounded-full border border-green-500 text-green-600 font-medium bg-green-50">
                        Employees
                    </span>
                    <h2 className="text-3xl md:text-2xl font-bold text-gray-900 leading-snug">
                        See tasks, track time, and navigate <br /> routes with ease.
                    </h2>
                    <p className="text-gray-600 text-md mb-6">
                        Everything you need to manage your workday from job assignments to
                        optimized routes and time logging.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-sm">
                            <span className="w-1 h-6 bg-green-500 mr-3 rounded" />
                            Assign jobs to the right team member
                        </li>
                        <li className="flex items-center text-sm">
                            <span className="w-1 h-6 bg-green-500 mr-3 rounded" />
                            Monitor performance in real time
                        </li>
                        <li className="flex items-center text-sm">
                            <span className="w-1 h-6 bg-green-500 mr-3 rounded" />
                            Manage clients and services seamlessly
                        </li>
                    </ul>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="relative z-10 lg:w-1/2 w-full h-auto flex justify-center mt-10 lg:mt-0"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img
                        src="Rectangle-3.png"
                        alt="App Preview"
                        className="w-[300px] md:w-[380px] lg:w-[450px] transform rotate-0 drop-shadow-2xl 
              [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] 
              [mask-repeat:no-repeat] [mask-size:100%_100%] lg:mt-10"
                    />
                </motion.div>
            </section>
        </div>
    );
}
