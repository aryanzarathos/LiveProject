import React, { Suspense, lazy } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Routes,
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
import { useSelector } from "react-redux"
import ErrorBoundary from '../components/ErrorBoundry/index';
const App = lazy(() => import('../components/App'));
const Dashboard = lazy(() => import('../components/Dashboard/index'));
const ShimmerLogin = lazy(() => import('../components/Login/ShimmerLogin'));
const AppRouting = () => {

    const { users } = useSelector((state) => {
        return {
            users: state.user

        }
    })

    return (
        <BrowserRouter>
            <Suspense fallback={<ShimmerLogin />} >
                <Routes>
                    <Route path="/Login" element={<App />} errorElement={<ErrorBoundary />} />
                </Routes>
            </Suspense>
            <Suspense fallback={<ShimmerLogin />} >
                <Routes>
                    <Route path="/SignUp" element={<App />} errorElement={<ErrorBoundary />} />
                </Routes>
            </Suspense>
            <Suspense fallback={<ShimmerLogin />} >
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} errorElement={<ErrorBoundary />} />
                </Routes>
            </Suspense>
            <Routes>
                    <Route path="/" element={<App />} errorElement={<ErrorBoundary />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouting