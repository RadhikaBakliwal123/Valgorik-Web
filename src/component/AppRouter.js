import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./TopBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import Header from './Header'

const AppRouter = () => {
    const CONTANCT_US_PAGE = "/contactUs"
    return (
        <BrowserRouter>
            <TopBar />
            <Header />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="ABOUT_US_PAGE" element={<About />}></Route>
                <Route path={CONTANCT_US_PAGE} element={<Contact />}></Route>
            </Routes>

        </BrowserRouter>
    );
}
export default AppRouter;