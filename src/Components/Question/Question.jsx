import React, { useState, useEffect } from 'react';
import './Question.css'


export const Question = () => {
    const [question, setQuestion] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [language, setLanguage] = useState("English");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showExamples, setShowExamples] = useState(true);
    const [startAnimation, setStartAnimation] = useState(false);const [headerDescription, setHeaderDescription] = useState("Find answers to your queries with AI-generated Bible verses and explanations.");
    const [questionLabel, setQuestionLabel] = useState("Question:");
    

    useEffect(() => {
      if (startAnimation) {
          const container = document.querySelector('.response-container');
          if(container) {
              container.scrollIntoView({ behavior: 'smooth' });
          }
      }
  }, [startAnimation]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setDropdownVisible(false);

    if (newLanguage === "Serbian") {
        setHeaderDescription("Pronađite odgovore na svoja pitanja uz pomoć AI-generisanih biblijskih stihova i objašnjenja.");
        setQuestionLabel("Pitanje:");
    } else { // Assuming the default language is English
        setHeaderDescription("Find answers to your queries with AI-generated Bible verses and explanations.");
        setQuestionLabel("Question:");
    }
};


    const formatResponse = (response) => {
        const sections = response.split('\n'); // Adjust based on your response format
        return (
          <div>
              {sections.map((section, index) => {
                  // Split the section at the first occurrence of ": "
                  let splitIndex = section.indexOf(': ');
                  let title = section;
                  let content = '';
      
                  if (splitIndex !== -1) {
                      // Extract title up to the colon and include it in the title
                      title = section.substring(0, splitIndex + 1);
                      // Extract content after the colon
                      content = section.substring(splitIndex + 2);
                  }
      
                  return (
                      <p key={index}><strong>{title}</strong> {content}</p>
                  );
              })}
          </div>
      );
    };

    const handleQuestionSubmit = async () => {
      if(!question) {
        return;
      }

      setShowExamples(false);
      setIsLoading(true);
      setStartAnimation(false); 

      try {
        const response = await fetch('https://bible-guidance.onrender.com/ask', {
          // const response = await fetch('http://localhost:10000/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question, language })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setAiResponse(data.aiResponse);
        setIsLoading(false);
        setStartAnimation(true);
    } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
    }
};

    return (<div className="container">
      <div className="flex-container">
        <div className="search-container">
          <div className="header-container">
            <h1 className="header-title">Bible Guidance</h1>
            <p className="header-description">{headerDescription}</p>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Type your question here..."
              className="search-input"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button className="search-button" onClick={handleQuestionSubmit}>
              Ask
            </button>
          </div>

          <div className="language-indicator">
            <button className="language-button" onClick={() => setDropdownVisible(!dropdownVisible)}>
              {language} ▼
            </button>
            {dropdownVisible && (
              <div className="language-dropdown">
                <div onClick={() => handleLanguageChange("English")}>English</div>
                <div onClick={() => handleLanguageChange("Serbian")}>Serbian</div>
              </div>
            )}
          </div>
          <br/>

          {showExamples && (
            <div className="example-box">
              <p className="example-text"><strong>Describe your current situation and/or ask for assistance from the Bible.</strong></p>
              <ul>
                <li>I have had a fight with my wife, what should I do?</li>
                <li>[More example questions...]</li>
              </ul>
            </div>
          )}
          {isLoading && (
              <div className="loading-overlay">
                  <div className="loading-animation">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                  </div>
              </div>
          )}
          <div className={`response-container ${startAnimation ? 'animate' : ''}`}>
              {aiResponse && (
                  <div className="response-content">
                      <p><strong>{questionLabel}</strong> {question}</p>
                      {formatResponse(aiResponse)}
                  </div>
              )}
          </div>

        </div>
      </div></div>
      );
    };