import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Services() {
    const features = [
        {
            icon: "icon-1.png",
            title: "Easy Service Booking",
            desc: "Streamlined booking process for clients with service catalogs and availability.",
        },
        {
            icon: "icon-2.png",
            title: "Real-Time Tracking",
            desc: "Monitor job progress, employee hours, and project timelines with live updates.",
        },
        {
            icon: "icon-3.png",
            title: "Performance Analytics",
            desc: "Comprehensive reporting and insights to improve business operations and efficiency.",
        },
        {
            icon: "icon-4.png",
            title: "Secure & Reliable",
            desc: "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
        },
    ];

    return (
        <section className="bg-white pt-10 pb-30 px-6 md:px-12 lg:px-14">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className={`flex flex-col items-start text-left p-6 ${i === 0
                                    ? "border-b md:border-b-0 md:border-r border-gray-200"
                                    : i === 1
                                        ? "border-b md:border-b-0 lg:border-r border-gray-200"
                                        : i === 2
                                            ? "border-b md:border-b-0 md:border-r border-gray-200"
                                            : ""
                                }`}
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50 text-green-600 mb-4">
                                <img src={feature.icon} alt="icon" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-gray-600 text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
