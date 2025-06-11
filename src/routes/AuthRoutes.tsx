import { Routes, Route } from "react-router";
import { SignIn } from "../pages/SignIn";
import { AuthLayout } from "../components/AuthLayout";
import { SignUp } from "../pages/SingUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>

    </Routes>
  );
}
