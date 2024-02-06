import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container about-container">
            <h1>About Bible Guidance</h1>
            <p className="disclaimer">
                <strong>Disclaimer:</strong> This website serves as a spiritual guidance tool and is not intended to replace the Bible or any traditional biblical studies. It's a supplementary resource designed to inspire and encourage personal reflection.
            </p>
            
            <h2>Our Mission</h2>
            <p>
                Fill in with details about the mission and vision of your website.
            </p>

            <h2>How It Works</h2>
            <p>
                Brief explanation on how users can utilize the website. 
            </p>

            <h2>Beta Version</h2>
            <p>
                We are currently in a beta version, actively working on introducing more features and improvements. Stay tuned for updates and enhancements coming soon.
            </p>
        </div>
    );
};

export default About;