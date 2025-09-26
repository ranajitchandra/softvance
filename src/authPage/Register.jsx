// src/pages/Register.jsx
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";
import { register as registerApi } from "../api/auth";

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm((s) => ({
            ...s,
            [name]: type === "checkbox" ? checked : value,
        }));
        setFieldErrors((s) => ({ ...s, [name]: undefined }));
    }

    function validate() {
        const errors = {};
        if (!form.first_name?.trim()) errors.first_name = "First name is required";
        if (!form.last_name?.trim()) errors.last_name = "Last name is required";

        if (!form.email?.trim()) errors.email = "Email is required";
        else {
            // simple email regex
            const re = /\S+@\S+\.\S+/;
            if (!re.test(form.email)) errors.email = "Email is invalid";
        }

        if (!form.password) errors.password = "Password is required";
        else if (form.password.length < 8) errors.password = "Password must be at least 8 characters";

        if (!form.password_confirmation) errors.password_confirmation = "Please confirm password";
        else if (form.password !== form.password_confirmation) errors.password_confirmation = "Passwords do not match";

        if (!form.terms) errors.terms = "You must accept the terms";

        return errors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setServerError("");
        const errors = validate();
        if (Object.keys(errors).length) {
            setFieldErrors(errors);
            return;
        }

        // Build formdata
        const fd = new FormData();
        fd.append("first_name", form.first_name);
        fd.append("last_name", form.last_name);
        fd.append("email", form.email);
        fd.append("password", form.password);
        fd.append("password_confirmation", form.password_confirmation);
        fd.append("terms", form.terms ? "true" : "false");

        setLoading(true);
        try {
            const resp = await registerApi(fd);
            setLoading(false);
            alert("Registration successful. Please login.");
            console.log(resp);
            
            navigate("/verify-otp" , { state: { email: form.email } });
        } catch (err) {
            setLoading(false);
            // Try to display helpful errors
            if (err.response && err.response.data) {
                const data = err.response.data;

                // If backend returns validation errors as an object e.g. { errors: { email: ["..."] } }
                if (data.errors && typeof data.errors === "object") {
                    const newFieldErrors = {};
                    Object.keys(data.errors).forEach((k) => {
                        // take the first message
                        newFieldErrors[k] = Array.isArray(data.errors[k]) ? data.errors[k][0] : data.errors[k];
                    });
                    setFieldErrors(newFieldErrors);
                } else if (data.message) {
                    setServerError(data.message);
                } else {
                    setServerError("Registration failed. Please try again.");
                }
            } else {
                setServerError("Network error. Please try again.");
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            {/* Top-left logo - keep from your design */}
            <div className="absolute top-6 left-6">
                <img src="/logo.png" alt="ScapeSync Logo" className="h-10" />
            </div>

            <div className="w-full max-w-md px-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Create your Account</h2>
                    <p className="mt-1 text-sm text-gray-500">When sports Meets smart Tech.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="sr-only" htmlFor="first_name">First name</label>
                            <input
                                id="first_name"
                                name="first_name"
                                value={form.first_name}
                                onChange={handleChange}
                                placeholder="First Name"
                                className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 ${fieldErrors.first_name ? "border-red-400" : "border-gray-300"}`}
                                aria-invalid={!!fieldErrors.first_name}
                                aria-describedby={fieldErrors.first_name ? "err-first_name" : undefined}
                            />
                            {fieldErrors.first_name && <p id="err-first_name" className="text-xs text-red-600 mt-1">{fieldErrors.first_name}</p>}
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="last_name">Last name</label>
                            <input
                                id="last_name"
                                name="last_name"
                                value={form.last_name}
                                onChange={handleChange}
                                placeholder="Last name"
                                className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 ${fieldErrors.last_name ? "border-red-400" : "border-gray-300"}`}
                                aria-invalid={!!fieldErrors.last_name}
                                aria-describedby={fieldErrors.last_name ? "err-last_name" : undefined}
                            />
                            {fieldErrors.last_name && <p id="err-last_name" className="text-xs text-red-600 mt-1">{fieldErrors.last_name}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 ${fieldErrors.email ? "border-red-400" : "border-gray-300"}`}
                            aria-invalid={!!fieldErrors.email}
                            aria-describedby={fieldErrors.email ? "err-email" : undefined}
                        />
                        {fieldErrors.email && <p id="err-email" className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>}
                    </div>

                    <div className="relative">
                        <label className="sr-only" htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 ${fieldErrors.password ? "border-red-400" : "border-gray-300"}`}
                            aria-invalid={!!fieldErrors.password}
                            aria-describedby={fieldErrors.password ? "err-password" : undefined}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((s) => !s)}
                            className="absolute right-3 top-2.5 text-gray-500"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </button>
                        {fieldErrors.password && <p id="err-password" className="text-xs text-red-600 mt-1">{fieldErrors.password}</p>}
                    </div>

                    <div className="relative">
                        <label className="sr-only" htmlFor="password_confirmation">Confirm Password</label>
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            type={showConfirmPassword ? "text" : "password"}
                            value={form.password_confirmation}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 ${fieldErrors.password_confirmation ? "border-red-400" : "border-gray-300"}`}
                            aria-invalid={!!fieldErrors.password_confirmation}
                            aria-describedby={fieldErrors.password_confirmation ? "err-password_confirmation" : undefined}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword((s) => !s)}
                            className="absolute right-3 top-2.5 text-gray-500"
                            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                        >
                            {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </button>
                        {fieldErrors.password_confirmation && <p id="err-password_confirmation" className="text-xs text-red-600 mt-1">{fieldErrors.password_confirmation}</p>}
                    </div>

                    <div className="flex items-start gap-2">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            checked={form.terms}
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to Tech Takes <a href="#" className="text-green-600 underline">Terms of Service</a> and <a href="#" className="text-green-600 underline">Privacy Policy</a>.
                        </label>
                    </div>
                    {fieldErrors.terms && <p className="text-xs text-red-600 mt-1">{fieldErrors.terms}</p>}

                    {serverError && <div className="text-sm text-red-600">{serverError}</div>}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full rounded-md px-4 py-2 text-white font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
                        aria-busy={loading}
                    >
                        {loading ? "Creating..." : "Create Account"}
                    </button>
                </form>

                <div className="flex items-center gap-3 my-4">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-xs text-gray-400">OR</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                    <img src="/ic_google.png" alt="Google" className="h-5 w-5" />
                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Don’t have an account?{" "}
                    <a href="/login" className="text-green-600 hover:underline">Get started</a>
                </p>
            </div>
        </div>
    );
}
