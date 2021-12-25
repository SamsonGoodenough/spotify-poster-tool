import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, RedirectToHere } from "./pages";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/spotify" element={<RedirectToHere/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}