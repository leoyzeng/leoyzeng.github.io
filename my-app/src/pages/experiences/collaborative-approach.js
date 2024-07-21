import '../../css/experience-details.css';
import React from "react";


const CollaborativeApproach = () => {

    return (
        <div id="grid-container">

            <div className="grid">

                <div id="title">
                    <h1>
                        Full Stack Software Developer Internship at Collaborative Approach
                    </h1>

                    <div className="interact-wrapper">
                        <a className="timeline-interact" href="/experience">Back</a>
                    </div>

                </div>

                <div id="text1" className="text">
                    <p>
                        During my first internship with the University of Waterloo Co-op program, I worked at Collaborative
                        Approach, a company specializing in software solutions for therapists, nurses, and other medical
                        professionals. The software suite includes features such as cloud-based storage for patient
                        documents, automated email sending, and customizable file templates.

                        In this role, I utilized a diverse tech stack including JavaScript, CSS, and HTML for the
                        front-end development, as well as PHP, SQL, and Linux for the back-end. My responsibilities
                        included:
                        <ul>
                            <li>Developing new front-end functionalities.</li>
                            <li>Creating a tool to export files from the file system into XML format.</li>
                            <li>Developing a WordPress plugin to synchronize events between a WordPress website and
                                Google Sheets using Google's API.</li>
                        </ul>
                    </p>
                </div>

                <div id="image1">
                    <img className="slide-image" src="../images/cats-logo.png" alt="image"/>

                </div>

            </div>

        </div>
    );
}

export default CollaborativeApproach;
