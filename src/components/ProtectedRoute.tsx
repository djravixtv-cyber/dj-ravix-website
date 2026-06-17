import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: ReactNode;
}) {
  const isAdmin =
    localStorage.getItem("admin") === "true";

  return isAdmin ? children : <Navigate to="/login" />;
}