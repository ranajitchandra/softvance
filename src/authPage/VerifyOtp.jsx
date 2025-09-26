import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { verifyOtp, resendOtp } from "../api/auth";
import { FaArrowLeft } from "react-icons/fa";

export default function VerifyOtp() {
    const navigate = useNavigate();
    const location = useLocation();
    const emailFromRegister = location.state?.email || "";

    const [email] = useState(emailFromRegister);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputsRef = useRef([]);
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 5) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    async function handleVerify(e) {
        e.preventDefault();
        setServerError("");
        setSuccessMsg("");

        const code = otp.join("");
        if (code.length !== 6) {
            setServerError("Please enter the 6-digit OTP");
            return;
        }

        const fd = new FormData();
        fd.append("email", email);
        fd.append("otp", code);

        setLoading(true);
        try {
            await verifyOtp(fd);
            setLoading(false);
            alert("OTP Verified successfully. You can login now.");
            navigate("/login");
        } catch (err) {
            setLoading(false);
            setServerError(err.response?.data?.message || "Invalid OTP. Try again.");
        }
    }

    async function handleResend() {
        setServerError("");
        setSuccessMsg("");

        const fd = new FormData();
        fd.append("email", email);

        try {
            await resendOtp(fd);
            setSuccessMsg("OTP resent successfully. Check your email.");
        } catch (err) {
            setServerError("Failed to resend OTP. Try again later.");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-md p-8">
                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-green-600 text-sm mb-6 hover:underline"
                >
                    <FaArrowLeft className="mr-2" /> Back
                </button>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Please check your email!
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    We’ve emailed a 6-digit confirmation code to{" "}
                    <span className="font-medium">{email}</span>. Please enter it below to
                    verify your email.
                </p>

                {/* OTP Inputs */}
                <form onSubmit={handleVerify} className="space-y-6">
                    <div className="flex justify-between space-x-2">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputsRef.current[index] = el)}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-12 h-12 text-center border rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        ))}
                    </div>

                    {serverError && (
                        <div className="text-sm text-red-600">{serverError}</div>
                    )}
                    {successMsg && (
                        <div className="text-sm text-green-600">{successMsg}</div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-md text-white font-medium ${loading
                                ? "bg-green-400 cursor-not-allowed"
                                : "bg-green-600 hover:bg-green-700"
                            }`}
                    >
                        {loading ? "Verifying..." : "Verify"}
                    </button>
                </form>

                {/* Resend */}
                <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">
                        Don’t have a code?{" "}
                        <button
                            onClick={handleResend}
                            className="text-green-600 font-medium hover:underline"
                        >
                            Resend code
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}
