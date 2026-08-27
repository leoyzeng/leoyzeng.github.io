import '../../css/chef-boy.css';
import React from "react";


const ChefBoy = () => {


    return (
        <div id="grid-container">

            <div className="grid">

                <div id="title">
                    <h1>
                        Chef Boy
                    </h1>
                    <p className="text">
                        3D action/adventure game created using JMonkey (Java) engine and blender for model & animations.
                    </p>

                    <div className="interact-wrapper">
                        <a className="slide-interact" href="/projects">Back</a>
                        <a className="slide-interact" href="../download/chef-boy.zip" download="ChefBoy">Download
                            Project</a>
                        <a className="slide-interact" href="https://github.com/Leo1478/Grade12Project"
                           target="_blank">Github</a>
                    </div>

                </div>

                <div id="text1" className="text">
                    <p>
                        Chef Boy is a 3d action/adventure game where a chef must traverse around an alien
                        world and collect ingredients for the ultimate recipe. There are different enemies to
                        fight and terrain to explore. The character can be controlled with WASD to move and mouse
                        to attack or block attacks.
                    </p>
                </div>

                <div id="image1">
                    <iframe id="video"
                            width="480"
                            height="300"
                            src="https://www.youtube.com/embed/gAUOaSNNJ3Q"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>

                </div>

                <div id="text2" className="text">
                    <p>
                        Ever since I started programming, I've wanted to crate a game using 3D graphics. I knew
                        this project will be significantly more difficult than my previous project (Toony Wars).
                        Although this project was more difficult, the challenge motivates me as I strive to put more
                        effort in the project.
                    </p>

                </div>
                <div id="image2">
                    <img className="slide-image" src="../images/chef-boy2.png" alt="image"></img>
                </div>

                <div id="text3" className="text">
                    <p>
                        Throughout this project, I've learned many useful technical skills and soft skills. As this
                        project is heavily object oriented, I started by working with my team and creating a
                        comprehensive
                        UML diagram to plan out the relationships between each class. I implemented OOP concepts such as
                        inheritance, abstraction, polymorphism, and encapsulation to reduce complexity and improve code
                        readability. I've implemented data structures such as nodes, lists, and queues so that I can
                        have
                        a better understanding of how to use them practically. I utilized sorting algorithms to
                        organize the items in game. Blender is used to create the models in the game. The JMonkey engine
                        was used to render the 3D graphics and control shaders and lighting.
                    </p>
                </div>

                <div id="image3">
                    <img className="slide-image" src="../images/chef-boy3.png" alt="image"></img>
                </div>

                <div id="text4" className="text">
                    <p>
                        I learned many technical skills from this project, but just as importantly, I learned many other
                        skills to help me accomplish this project. I learned to use Github for version control and
                        collaborating with my group. I also learned how to more effectively research because I was
                        completely unfamiliar with the JMonkey engine. I learned how to use the engine through reading
                        documentation, online forums, youtube videos. My group and I had to research and find an obscure
                        tool to convert Blender files into files used by the game engine.
                    </p>
                </div>

                <div id="image4">
                    <img className="slide-image" src="../images/chef-boy4.png" alt="image"></img>
                </div>

            </div>

        </div>
    );
}

export default ChefBoy;
