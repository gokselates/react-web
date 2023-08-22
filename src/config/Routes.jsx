import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import DefaultLayout from '../layout'
import Settings from '../pages/settings'

const Dashboard = lazy(() => import("../pages/dashboard"))
const NotFound = lazy(() => import("../pages/404"))

export default function RoutesWrapper() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Suspense><Dashboard /></Suspense>} />
                <Route path="/ayarlar" element={<Suspense><Settings /></Suspense>} />
                <Route path="*" element={<Suspense><NotFound /></Suspense>} />
            </Route>
        </Routes>
    )
}