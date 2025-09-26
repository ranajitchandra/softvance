// src/pages/Login.jsx
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";
import { login } from "../api/auth";

export default function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        setFieldErrors((s) => ({ ...s, [name]: undefined }));
    }

    function validate() {
        const errors = {};
        if (!form.email?.trim()) errors.email = "Email is required";
        else {
            const re = /\S+@\S+\.\S+/;
            if (!re.test(form.email)) errors.email = "Email is invalid";
        }

        if (!form.password) errors.password = "Password is required";
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

        const fd = new FormData();
        fd.append("email", form.email);
        fd.append("password", form.password);

        setLoading(true);
        try {
            const resp = await login(fd);
            setLoading(false);

            // store token/user if backend returns
            if (resp.data?.token) {
                localStorage.setItem("token", resp.data.token);
            }

            navigate("/dashboard");
        } catch (err) {
            setLoading(false);
            if (err.response?.data?.message) {
                setServerError(err.response.data.message);
            } else {
                setServerError("Login failed. Please try again.");
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            {/* Top-left logo */}
            <div className="absolute top-6 left-6">
                <img src="/logo.png" alt="ScapeSync Logo" className="h-10" />
            </div>

            <div className="w-full max-w-md px-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Welcome Back</h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Sign in to continue with ScapeSync
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 ${fieldErrors.email ? "border-red-400" : "border-gray-300"
                                }`}
                            aria-invalid={!!fieldErrors.email}
                            aria-describedby={fieldErrors.email ? "err-email" : undefined}
                        />
                        {fieldErrors.email && (
                            <p id="err-email" className="text-xs text-red-600 mt-1">
                                {fieldErrors.email}
                            </p>
                        )}
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
                            className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 ${fieldErrors.password ? "border-red-400" : "border-gray-300"
                                }`}
                            aria-invalid={!!fieldErrors.password}
                            aria-describedby={fieldErrors.password ? "err-password" : undefined}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((s) => !s)}
                            className="absolute right-3 top-2.5 text-gray-500"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible size={20} />
                            ) : (
                                <AiOutlineEye size={20} />
                            )}
                        </button>
                        {fieldErrors.password && (
                            <p id="err-password" className="text-xs text-red-600 mt-1">
                                {fieldErrors.password}
                            </p>
                        )}
                    </div>

                    {serverError && (
                        <div className="text-sm text-red-600">{serverError}</div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full rounded-md px-4 py-2 text-white font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 ${loading
                                ? "bg-green-400 cursor-not-allowed"
                                : "bg-green-600 hover:bg-green-700"
                            }`}
                        aria-busy={loading}
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-xs text-gray-400">OR</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Google login */}
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                    <img src="/ic_google.png" alt="Google" className="h-5 w-5" />
                    Continue with Google
                </button>

                {/* Register redirect */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-green-600 hover:underline">
                        Create one
                    </a>
                </p>
            </div>
        </div>
    );
}
