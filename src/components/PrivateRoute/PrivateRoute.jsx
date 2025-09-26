// src/components/PrivateRoute.jsx
import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import Swal from "sweetalert2";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Unauthenticated",
        text: "You must log in to access this page.",
        confirmButtonColor: "#16a34a", // green button
      });
    }
  }, [token]);

  if (!token) {
    // Redirect back to login with "from" info
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
}
