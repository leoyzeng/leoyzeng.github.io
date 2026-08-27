import React from "react";
import "../css/website.css"

const Home = () => {
    return (
        <div id="introduction">

            <div id="picture">
                <img src="images/leo.png" alt="leo.jpg" width="300px" height="300px"/>
            </div>

            <div id="description">
                <p>
                    Hi, I am Leo, a student at the University of Waterloo for computer engineering,
                    feel free to look at some of my projects.
                </p>
            </div>

        </div>
    );
}

export default Home;