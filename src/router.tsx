import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RouterLayout } from "./components/navbar/RouterLayout";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/nose" element={<div>Hola</div>} />
    </Routes>
  );
};