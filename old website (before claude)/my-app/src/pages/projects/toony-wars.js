import '../../css/toony-wars.css';
import React from "react";


const ToonyWars = () => {


    return (
        <div id="grid-container">

            <div className="grid">

                <div id="title">
                    <h1>
                        Toony Wars
                    </h1>
                    <p className="text">
                        2D strategy game created using Pygame.
                    </p>

                    <div className="interact-wrapper">
                        <a className="slide-interact" href="/projects">Back</a>
                        <a className="slide-interact" href="../download/Toony-Wars.zip" download="Toony Wars">Download
                            Project</a>
                        <a className="slide-interact" href="https://github.com/Leo1478/ToonyWars"
                           target="_blank">Github</a>
                    </div>

                </div>

                <div id="text1" className="text">
                    <p>
                        Toony Wars is a 2D strategy game where 2 players can battle each other and deploy troops
                        to destroy the opponent's tower. There is also a single player mode, where a player can
                        fight against the computer with varying difficulties.
                    </p>
                </div>

                <div id="image1">
                    <img className="slide-image" src="../images/toony-wars1.png"></img>
                </div>

                <div id="text2" className="text">
                    <p>
                        The inspiration of this game came from web flash games I've played in my childhood.
                        I've been fascinated by how those games worked and how each component of the game
                        interacted with each other. So, I decided to create my own version.
                    </p>

                </div>

                <div id="image2">
                    <img className="slide-image" src="../images/toony-wars2.png"></img>
                </div>

                <div id="text3" className="text">
                    <p>
                        This is the first project I created, I wanted to expand my knowledge of Python and
                        also explore creating a functional application. Through this project, I've enhanced
                        my abilities in procedural programming & computer graphics, and I also learned how
                        to use and take advantage of an IDE. I worked on this Project with a friend, I learned
                        how to plan reasonable deadlines and deliver on those deadlines. This project helped me
                        improve my collaboration skills and communication skills as my friend and I often had to
                        communicate the bugs and difficulties in the program.
                    </p>
                </div>

                <div id="image3">
                    <img className="slide-image" src="../images/toony-wars3.png"></img>
                </div>

                <div id="text4" className="text">
                    I used Pygame to render the graphics in this game. Creating this project helped me gain a
                    further understanding in basic programming concepts such as lists, functions, and debugging.
                </div>


            </div>

        </div>

);
}

export default ToonyWars;
