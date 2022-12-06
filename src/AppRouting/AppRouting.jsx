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
            <Routes>
                <Route path="/Login" element=
                    {
                        <>
                            <Suspense fallback={<ShimmerLogin />}>
                                <App />
                            </Suspense>
                        </>
                    }

                    errorElement={<ErrorBoundary />} />
                <Route path="/SignUp" element={
                    <>
                        <Suspense fallback={<ShimmerLogin />}>
                            <App />
                        </Suspense>
                    </>
                } errorElement={<ErrorBoundary />} />
                <Route path="/dashboard" element={
                    <>
                        <Suspense fallback={<ShimmerLogin />}>
                            <Dashboard />
                        </Suspense>
                    </>
                } errorElement={<ErrorBoundary />} />
                <Route path="/" element={
                    <>
                        <Suspense fallback={<ShimmerLogin />}>
                            <App />
                        </Suspense>
                    </>
                } errorElement={<ErrorBoundary />} />

            </Routes>
        </BrowserRouter>
    )
}
export default AppRouting