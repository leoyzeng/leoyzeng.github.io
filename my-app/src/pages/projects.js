import '../css/projects.css';
import React, {useEffect} from "react";

let index = 0;

function changeSlideUp() {
    displaySlides(index += 1);
}

function changeSlideDown() {
    displaySlides(index -= 1);
}

function displaySlides() {

    //find all slides
    var slides = document.getElementsByClassName("slide");

    // if index is out of bounds
    if (index < 0) {
        index = slides.length-1
    }

    if (index === slides.length) {
        index = 0
    }

    // hide everything
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // show current slide
    slides[index].style.display = "block";
}


const Projects = () => {

    useEffect(()=>{displaySlides()},[])

    return (
        <div>
            <div id="slides-container">

                <h1 id="header-text">
                    Projects I've created
                </h1>

                <div className="slide">
                    <div className="slide-image-container">
                        <img className="slide-image" src="images/chef-boy0.png" alt="image"></img>
                            <button className="slide-button button-right" onClick={changeSlideDown}>&#10094;</button>
                            <button className="slide-button button-left" onClick={changeSlideUp}>&#10095;</button>
                    </div>

                    <h2 className="slide-title">Chef Boy</h2>
                    <p className="slide-text">3D action/adventure game created using Jmonkey (Java) engine
                        and blender for model & animations.</p>
                    <div className="interact-wrapper">
                        <a className="slide-interact" href="projects/chef-boy">More Info</a>
                        <a className="slide-interact" href="download/chef-boy.zip" download="ChefBoy">Download
                            Project</a>
                        <a className="slide-interact" href="https://github.com/leoyzeng/Chef-Boy"
                           target="_blank">Github</a>
                    </div>
                </div>

                <div className="slide">

                    <div className="slide-image-container">
                        <img className="slide-image" src="images/toony-wars0.png" alt="image"></img>
                            <button className="slide-button button-right" onClick={changeSlideDown}>&#10094;</button>
                            <button className="slide-button button-left" onClick={changeSlideUp}>&#10095;</button>
                    </div>
                    <h2 className="slide-title">Toony Wars</h2>
                    <p className="slide-text">2D strategy game created using Pygame.</p>
                    <div className="interact-wrapper">
                        <a className="slide-interact" href="projects/toony-wars">More Info</a>
                        <a className="slide-interact" href="download/Toony-Wars.zip" download="Toony Wars">Download
                            Project</a>
                        <a className="slide-interact" href="https://github.com/leoyzeng/ToonyWars"
                           target="_blank">Github</a>
                    </div>
                </div>

                <div className="slide">

                    <div className="slide-image-container">
                        <img className="slide-image" src="images/personal-website0.png" alt="image"></img>
                            <button className="slide-button button-right" onClick={changeSlideDown}>&#10094;</button>
                            <button className="slide-button button-left" onClick={changeSlideUp}>&#10095;</button>
                    </div>
                    <h2 className="slide-title">Personal Website</h2>
                    <p className="slide-text">The website you are looking at right now.</p>
                    <div className="interact-wrapper">
                        <a className="slide-interact" href="https://github.com/leoyzeng/leoyzeng.github.io"
                           target="_blank">Github</a>
                    </div>
                </div>

                <div className="slide">
                    <div className="slide-image-container">
                        <img className="slide-image" src="images/sorting-algorithm-visualiser.png" alt="image"></img>
                            <button className="slide-button button-right" onClick={changeSlideDown}>&#10094;</button>
                            <button className="slide-button button-left" onClick={changeSlideUp}>&#10095;</button>
                    </div>
                    <h2 className="slide-title">Sorting Algorithm Visualiser</h2>
                    <p className="slide-text">Android app to visualise various sorting algorithms step by step to
                        explain how algorithms work.
                        Currently in development.</p>
                    <div className="interact-wrapper">
                        <a className="slide-interact" href="https://github.com/leoyzeng/sorting-algorithm-visualizer"
                           target="_blank">Github</a>
                    </div>
                </div>

                <div className="slide">
                    <div className="slide-image-container">
                        <img className="slide-image" src="images/chef-boy-20.png" alt="image"></img>
                            <button className="slide-button button-right" onClick={changeSlideDown}>&#10094;</button>
                            <button className="slide-button button-left" onClick={changeSlideUp}>&#10095;</button>
                    </div>
                    <h2 className="slide-title">Chef Boy 2</h2>
                    <p className="slide-text">2D platformer game built using Unity Engine and C#. Currently in
                        development.</p>
                    <div className="interact-wrapper">
                        <a className="slide-interact" href="download/chef-boy-2.zip" download="ChefBoy 2">Download
                            Project</a>
                        <a className="slide-interact" href="https://github.com/leoyzeng/ChefGameDemo"
                           target="_blank">Github</a>
                    </div>
                </div>

                <div className="slide">
                    <div className="slide-image-container">
                        <img className="slide-image" src="images/citation0.png" alt="image"></img>
                            <button className="slide-button button-right" onClick={changeSlideDown}>&#10094;</button>
                            <button className="slide-button button-left" onClick={changeSlideUp}>&#10095;</button>
                    </div>
                    <h2 className="slide-title">Automatic Citation</h2>
                    <p className="slide-text">Automatically create website citations by using Selenium and Citation
                        Machine.</p>
                    <div className="interact-wrapper">
                        <a className="slide-interact" href="download/citation-automate.zip"
                           download="Automatic Citation">Download Project</a>
                        <a className="slide-interact" href="https://github.com/leoyzeng/citation-automate"
                           target="_blank">Github</a>
                    </div>
                </div>

                <div className="slide">
                    <div className="slide-image-container">
                        <img className="slide-image" src="images/bio-spreadsheet-game0.png" alt="image"></img>
                            <button className="slide-button button-right" onClick={changeSlideDown}>&#10094;</button>
                            <button className="slide-button button-left " onClick={changeSlideUp}>&#10095;</button>
                    </div>
                    <h2 className="slide-title">Bio Spreadsheet Game</h2>
                    <p className="slide-text">A program to simulate environmental changes created to help
                        my friends in biology class. Made using Google App Script. </p>
                    <div className="interact-wrapper">
                        <a className="slide-interact" href="download/bio-spreadsheet-game.zip"
                           download="Bio Spreadsheet Game">Download Project</a>
                        <a className="slide-interact" href="https://github.com/leoyzeng/bio-spreadsheet-game"
                           target="_blank">Github</a>
                    </div>
                </div>

                <div className="slide">
                    <div className="slide-image-container">
                        <img className="slide-image" src="images/arduino0.jpg" alt="image"></img>
                            <button className="slide-button button-right" onClick={changeSlideDown}>&#10094;</button>
                            <button className="slide-button button-left" onClick={changeSlideUp}>&#10095;</button>
                    </div>
                    <h2 className="slide-title">Various Arduino Projects</h2>
                    <p className="slide-text">Projects created with Arduino, such as a maze following robot, electronic
                        dice,
                        traffic light simulation, and more.</p>
                    <div className="interact-wrapper">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
