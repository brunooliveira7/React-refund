import { Routes, Route } from "react-router";
import { SinIng } from "../pages/SingIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SinIng />} />
    </Routes>
  );
}