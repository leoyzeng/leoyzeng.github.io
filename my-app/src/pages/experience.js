import '../css/experience.css';
import React from "react";


const Experience = () => {

    return (
        <div className="timeline">

            <div className="container left">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>Jan-Apr 2025</h2>
                        <p>Software Engineering Coop</p>
                        <p>AMD</p>
                    </div>
                    <div className="company-logo">
                        <div className="company-logo-helper">
                            <img className="logo-image" src="images/amd-logo.png" alt="image"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container right">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>Sep-Dec 2024</h2>
                        <p>Undergraduate Research Assistant</p>
                        <p>University of Waterloo</p>
                    </div>
                    <div className="company-logo">
                        <div className="company-logo-helper">
                            <img className="logo-image" src="images/waterloo.png" alt="image"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>Jan-Apr 2024</h2>
                        <p>Software Engineering Coop</p>
                        <p>Reblink</p>
                    </div>
                    <div className="company-logo">
                        <div className="company-logo-helper">
                            <img className="logo-image" src="images/reblink-logo.png" alt="image"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container right">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>May-Aug 2023</h2>
                        <p>Software Engineering Coop</p>
                        <p>Dematic</p>
                    </div>
                    <div className="company-logo">
                        <div className="company-logo-helper">
                            <img className="logo-image" src="images/dematic-logo.png" alt="image"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>Sep-Dec 2022</h2>
                        <p>Software Engineering Coop</p>
                        <p>Plan Group</p>
                    </div>
                    <div className="company-logo">
                        <div className="company-logo-helper">
                            <img className="logo-image" src="images/plan-group-logo.png" alt="image"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>Jan-Apr 2022</h2>
                        <p>Full Stack Web Developer Coop</p>
                        <p>Collaborative Approach</p>

                        {/*<a className="timeline-interact" href="experiences/collaborative-approach">More Info</a>*/}

                    </div>
                    <div className="company-logo">
                        <img className="logo-image" src="images/cats-logo.png" alt="image"></img>
                    </div>

                </div>
            </div>

            <div className="container left">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>2021-2026</h2>
                        <p>Bachelor of Applied Science Computer Engineering</p>
                        <p>University of Waterloo</p>
                    </div>
                    <div className="company-logo">
                        <img className="logo-image" src="images/waterloo.png" alt="image"></img>
                    </div>
                </div>
            </div>

            <div className="container right">
                <div className="content">
                    <div className="text-wrapper">
                        <h2>Jul-Aug 2019</h2>
                        <p>Summer Camp Volunteering</p>
                        <p>Richmond Hill</p>
                    </div>
                    <div className="company-logo">
                        <img className="logo-image" src="images/richmondhill-logo.png" alt="image"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

