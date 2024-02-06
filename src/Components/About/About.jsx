import React from 'react'
import './About.css'

export const About = () => {
  return (
    <div className="container about-container">
        <div className="flex-container">
        <div className="header-container">
            <h1 className="header-title">About This Website</h1>
        </div>
        <div className="text-content">
            <p className="header-description">
                <strong>Disclaimer:</strong> This website is designed to offer spiritual guidance and should not be seen as a replacement for the Bible or traditional biblical study.
            </p>
            <h2 className="header-title">Our Mission</h2>
            <p className="header-description">
            Our mission is to illuminate the wisdom of the Bible, making its profound teachings accessible and relatable to everyone. We strive to bridge the gap between ancient scripture and contemporary life challenges, offering practical advice and spiritual support. By harnessing the power of AI, we aim to provide personalized guidance that inspires, uplifts, and empowers individuals to navigate life's journey with faith and understanding.
            </p>
            <div className="how-it-works-section">
                <h2 className="section-title">How It Works</h2>
                <div className="section-content">
                    <p>At the heart of our platform is a cutting-edge AI system, meticulously designed to understand and interpret the complexities of your inquiries. Here's a step-by-step guide to how we use technology to find the perfect answer to your questions:</p>
                    <ol>
                        <li><strong>Question Submission:</strong> Users are invited to share their questions, dilemmas, or situations for which they seek guidance.</li>
                        <li><strong>AI Interpretation:</strong> Our AI analyzes the context and essence of your inquiry, grasping the underlying concerns or challenges.</li>
                        <li><strong>Searching Scripture:</strong> It delves into a vast database of biblical scriptures, finding passages that resonate with your query.</li>
                        <li><strong>Crafting Responses:</strong> The AI combines relevant scriptures with thoughtful interpretations, offering comprehensive answers.</li>
                        <li><strong>Personalized Guidance:</strong> Each answer is tailored to provide insight and guidance, reflecting biblical teachings and moral foundations.</li>
                    </ol>
                    <p>Our platform is continually learning and evolving, aiming to make biblical teachings more accessible and applicable to modern life. Your feedback is invaluable as we strive to improve and enhance our service.</p>
                </div>
            </div>
            <h2 className="header-title">Beta Version</h2>
            <p className="header-description">
                This is currently a beta version of our platform. More features and improvements are on the way. Stay tuned!
            </p>
        </div></div>
    </div>
  )
}
