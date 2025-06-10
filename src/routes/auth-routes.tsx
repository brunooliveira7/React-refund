import { Routes, Route } from "react-router";
import { SinIng } from "../pages/SingIn";
import { AuthLayout } from "../components/AuthLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SinIng />} />
      </Route>
    </Routes>
  );
}
