import { Routes, Route } from "react-router";
import { SinIn } from "../pages/SingIn";
import { AuthLayout } from "../components/AuthLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SinIn />} />
      </Route>

    </Routes>
  );
}
