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
                    Howdy, I'm Leo, I enjoy camping, cooking, and skiing. 

                    I did my undergrad at the University of Waterloo, where I did research involving robotics and FPGAs. Along the way, I’ve had the chance to intern at companies like AMD and Cerebras Systems.

                    I’m currently pursuing my master’s degree at Carnegie Mellon to learn more about robotics and machine learning.
                </p>
            </div>

        </div>
    );
}

export default Home;