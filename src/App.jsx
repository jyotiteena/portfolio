import './assets/css/style.css';
import './assets/js/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import routes from './layout/Route';

const Header = lazy(() => import('./layout/Header'));
const Footer = lazy(() => import('./layout/Footer'));
import AOS from "aos"; 
import "aos/dist/aos.css"
function App() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <>
            <Routers>
                <Header />
                <Suspense fallback={<div>Loading..............</div>}>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </Suspense>
                <Footer />
            </Routers>
        </>
    );
}

export default App;
