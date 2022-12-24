import React from 'react';
import { Routes  , Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from "./pages/projects";
import Other from "./pages/other";
import ChefBoy from "./pages/projects/chef-boy";
import ToonyWars from "./pages/projects/toony-wars";
import Experience from "./pages/experience";

const Main = () => {
    return (
        <Routes> {/* changes page depending on url */}
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/other' element={<Other />} />

            <Route path='/projects/chef-boy' element={<ChefBoy />} />
            <Route path='/projects/toony-wars' element={<ToonyWars />} />
        </Routes>
    );
}

export default Main;