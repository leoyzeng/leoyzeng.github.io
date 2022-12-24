import React from "react";
import '../css/website.css';
import {Link} from "react-router-dom"
import Pdf from "../Leo-Zeng-software-resume.pdf"

const Navbar = () => {
    return (
        <nav>
            <div id="buttons">
                <a id="github" href="https://github.com/leoyzeng" target="_blank">Github</a>

                <Link to={Pdf} target="_blank">Resume</Link>

                <Link to="/other">
                    Other
                </Link>

                <Link to="/projects">
                    Projects
                </Link>


                <Link to="/experience">
                    Experience
                </Link>

                <Link to="/">
                    Home
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;
