import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is the app free to use?",
            answer:
                "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
        },
        {
            question: "Can I assign multiple employees to one job?",
            answer:
                "Absolutely. Our system lets you assign multiple employees to the same job so you can handle larger projects easily.",
        },
        {
            question: "Does it work on both mobile and desktop?",
            answer:
                "Yes, our app is fully responsive and works seamlessly across mobile devices, tablets, and desktop computers.",
        },
        {
            question: "Is my data secure?",
            answer:
                "We use enterprise-grade security with 99.9% uptime guarantee and advanced data protection.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-white via-green-50/30 to-white py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                {/* Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    Frequently Asked Questions
                </motion.h2>
                <motion.p
                    className="mt-3 text-gray-600"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Quick answers to help you get the most out of our app.
                </motion.p>

                {/* FAQ Items */}
                <div className="mt-12 space-y-4 text-left">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`border rounded-xl transition-all duration-300 ${openIndex === index
                                    ? "border-green-500 bg-white shadow-md"
                                    : "border-green-200 bg-white hover:border-green-400 hover:shadow-sm"
                                }`}
                        >
                            <button
                                className="w-full flex justify-between items-center p-5 text-gray-900 font-medium focus:outline-none"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <AiOutlineMinus className="w-5 h-5 text-green-600" />
                                ) : (
                                    <AiOutlinePlus className="w-5 h-5 text-green-600" />
                                )}
                            </button>

                            {/* Animate Answer */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="px-5 pb-5 text-gray-600 text-sm"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
