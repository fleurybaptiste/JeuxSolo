import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function PublicLayout() {
    return (
        <div className="public_layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
