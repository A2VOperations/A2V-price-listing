import React from "react";
import { Routes, Route } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import DashboardPage from "@/pages/DashboardPage";
import CategoryPage from "@/pages/CategoryPage";
import ProductPage from "@/pages/ProductPage";
import QuotesPage from "@/pages/QuotesPage";

export default function App() {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </PageContainer>
  );
}
