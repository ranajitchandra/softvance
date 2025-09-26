import React from 'react'

export default function Banner() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-green-50 via-white to-green-50 py-20 px-8 lg:px-20 flex flex-col lg:flex-row items-center">

            {/* Top Fade */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />


            {/* Left Content */}
            <div className="relative z-10 lg:w-1/2 w-full space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                    All Your Jobs <br />
                    <span className="relative inline-block">
                        One Smart App
                        {/* Decorative underline image */}
                        <img
                            src="/hero-flower.png"
                            alt="decorative underline"
                            className="hidden lg:block absolute left-30 top-[-130px] w-30"
                        />
                        <img
                            src="/underline-1.png"
                            alt="decorative underline"
                            className="hidden lg:block absolute left-27 top-[50px] w-60"
                        />
                    </span>
                </h1>

                <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0">
                    Built for business owners, employees, and clients to streamline job
                    scheduling, service tracking, and team management in one powerful app.
                </p>

                {/* Store Buttons */}
                <div className="flex justify-center lg:justify-start gap-4 mt-6">
                    <a href="#">
                        <img
                            src="/apple.png"
                            alt="Download on the App Store"
                            className="h-12"
                        />
                    </a>
                    <a href="#">
                        <img
                            src="/google.png"
                            alt="Get it on Google Play"
                            className="h-12"
                        />
                    </a>
                </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative z-10 lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0">
                <img
                    src="/hero.png"
                    alt="App Preview"
                    className="w-[300px] md:w-[420px] lg:w-[480px] 
            [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] 
            [mask-repeat:no-repeat] [mask-size:100%_100%]"
                />
            </div>
        </section>
    )
}

























// import React from "react";
// import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";

// export default function Banner() {
//     return (
//         <section className="relative overflow-hidden bg-gradient-to-r from-green-50 via-white to-green-50 py-20 px-8 lg:px-20 flex flex-col lg:flex-row items-center">
//             {/* Top Fade */}
//             <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

//             {/* Bottom Fade */}
//             <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

//             {/* Left Content */}
//             <div className="relative z-10 lg:w-1/2 w-full space-y-3 text-center lg:text-left">
//                 <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
//                     All Your Jobs <br />
//                     <span className="relative inline-block text-2xl md:text-3xl text-green-600">
//                         <Typewriter
//                             options={{
//                                 strings: ["One Smart App", "All in One Place", "For Everyone"],
//                                 autoStart: true,
//                                 loop: true,
//                                 delay: 60,
//                                 deleteSpeed: 40,
//                             }}
//                         />
//                         {/* Decorative underline image */}
//                         <img
//                             src="/hero-flower.png"
//                             alt="decorative underline"
//                             className="hidden lg:block absolute left-30 top-[-130px] w-30"
//                         />
//                     </span>
//                 </h1>

//                 <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0">
//                     Built for business owners, employees, and clients to streamline job
//                     scheduling, service tracking, and team management in one powerful app.
//                 </p>

//                 {/* Store Buttons */}
//                 <div className="flex justify-center lg:justify-start gap-4 mt-6">
//                     <a href="#">
//                         <img
//                             src="/apple.png"
//                             alt="Download on the App Store"
//                             className="h-12"
//                         />
//                     </a>
//                     <a href="#">
//                         <img
//                             src="/google.png"
//                             alt="Get it on Google Play"
//                             className="h-12"
//                         />
//                     </a>
//                 </div>
//             </div>

//             {/* Right Content - Phone Mockup */}
//             <div className="relative z-10 lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0">
//                 <motion.img
//                     src="/hero.png"
//                     alt="App Preview"
//                     className="w-[300px] md:w-[420px] lg:w-[480px] 
//           [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] 
//           [mask-repeat:no-repeat] [mask-size:100%_100%]"
//                     initial={{ opacity: 0, x: 200, scale: 0.9 }}
//                     animate={{ opacity: 1, x: 0, scale: 1 }}
//                     transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
//                     whileHover={{ scale: 1.05, rotate: 2 }}
//                 />
//             </div>
//         </section>
//     );
// }
