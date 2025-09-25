
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


export default function UserSection() {

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
    <div className="max-w-7xl mx-auto">

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



      <section className="bg-white pt-10 pb-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Feature 1 */}
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50 text-green-600 mb-4">
                {/* Calendar Icon */}
                <img src="icon-1.png" alt="icon" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Easy Service Booking</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Streamlined booking process for clients with service catalogs and availability.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50 text-green-600 mb-4">
                {/* Target Icon */}
                <img src="icon-2.png" alt="icon" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Real-Time Tracking</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Monitor job progress, employee hours, and project timelines with live updates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50 text-green-600 mb-4">
                {/* Chart Icon */}
                <img src="icon-3.png" alt="icon" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Comprehensive reporting and insights to improve business operations and efficiency.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50 text-green-600 mb-4">
                {/* Shield Icon */}
                <img src="icon-4.png" alt="icon" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Secure &amp; Reliable</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Enterprise-grade security with 99.9% uptime guarantee and data protection.
              </p>
            </div>

          </div>
        </div>
      </section>




      <div>
        <div className="text-center space-y-3">
          <h2 className="text-5xl font-bold">Build for Everyone</h2>
          <p className="w-[600px] mx-auto mt-4 text-gray-600 text-sm">Whether you're booking services, managing tasks, or running operations, we've designed the perfect experience for you.</p>
        </div>

        <section className="relative overflow-hidden py-10 px-8 lg:px-20 flex flex-col lg:flex-row items-center my-2">
          {/* Main Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/95 via-white to-green-50/95" />

          {/* Top Fade */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 lg:w-1/2 w-full space-y-3">
            <span className="px-4 py-1 mb-3 inline-block rounded-full border border-green-500 text-green-600 font-medium bg-green-50">
              Users
            </span>
            <h2 className="text-3xl md:text-2xl font-bold text-gray-900 leading-snug">
              Book services, track progress <br /> and stay updated.
            </h2>
            <p className="text-gray-600 text-md mb-6">
              Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.
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
          </div>

          {/* Right Image with Fade Bottom */}
          <div className="relative z-10 lg:w-1/2 w-full h-auto flex justify-center mt-10 lg:mt-0">
            <img
              src="Rectangle.png"
              alt="App Preview"
              className="w-[300px] md:w-[380px] lg:w-[450px] transform rotate-0 drop-shadow-2xl 
        [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] 
        [mask-repeat:no-repeat] [mask-size:100%_100%] lg:mt-10"
            />
          </div>
        </section>

        <section className="relative overflow-hidden py-10 px-8 lg:px-20 flex flex-col-reverse lg:flex-row items-center my-2">
          {/* Main Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50" />

          {/* Top Fade */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

          {/* left Image with Fade Bottom */}
          <div className="relative z-10 lg:w-1/2 w-full h-auto flex justify-center mt-10 lg:mt-0">
            <img
              src="Rectangle-2.png"
              alt="App Preview"
              className="w-[300px] md:w-[380px] lg:w-[450px] transform rotate-0 drop-shadow-2xl 
        [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] 
        [mask-repeat:no-repeat] [mask-size:100%_100%] lg:mt-10"
            />
          </div>

          {/* right Content */}
          <div className="relative z-10 lg:w-1/2 w-full space-y-3">
            <span className="px-4 py-1 mb-3 inline-block rounded-full border border-green-500 text-green-600 font-medium bg-green-50">
              Business Owners
            </span>
            <h2 className="text-3xl md:text-2xl font-bold text-gray-900 leading-snug">
              Assign jobs, monitor performance, and <br />  streamline operations.
            </h2>
            <p className="text-gray-600 text-md mb-6">
              Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.
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
          </div>


        </section>

        <section className="relative overflow-hidden py-10 px-8 lg:px-20 flex flex-col lg:flex-row items-center my-2">
          {/* Main Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50" />

          {/* Top Fade */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 lg:w-1/2 w-full space-y-3">
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
          </div>

          {/* Right Image with Fade Bottom */}
          <div className="relative z-10 lg:w-1/2 w-full h-auto flex justify-center mt-10 lg:mt-0">
            <img
              src="Rectangle-3.png"
              alt="App Preview"
              className="w-[300px] md:w-[380px] lg:w-[450px] transform rotate-0 drop-shadow-2xl 
        [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] 
        [mask-repeat:no-repeat] [mask-size:100%_100%] lg:mt-10"
            />
          </div>
        </section>
      </div>




      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Users Are Saying
          </h2>
          <p className="mt-3 text-gray-600">
            Real stories from clients, employees, and business owners who use our app every day.
          </p>

          {/* Testimonials Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-left relative">
              <div className="flex items-center space-x-3">
                <img
                  src="/Ellipse-1.png"
                  alt="User 1"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Farzana H.</h4>
                  <p className="text-xs text-gray-500">Owner, CleanPro Services</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                This app completely changed the way we manage our team. Assigning jobs takes
                minutes, and we never miss an update.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-left relative">
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
                I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-left relative">
              <div className="flex items-center space-x-3">
                <img
                  src="/Ellipse-3.png"
                  alt="User 3"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Farzana H.</h4>
                  <p className="text-xs text-gray-500">Rafiq M., Homeowner</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.
              </p>
            </div>

          </div>
        </div>
      </section>





      <section className="bg-gradient-to-b from-white via-green-50/30 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Quick answers to help you get the most out of our app.
          </p>

          {/* FAQ Items */}
          <div className="mt-12 space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl transition-all ${openIndex === index
                  ? "border-green-500 bg-white shadow-sm"
                  : "border-green-200 bg-white"
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
                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>






    </div>

  );
}
