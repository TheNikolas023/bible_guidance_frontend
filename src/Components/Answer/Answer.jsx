import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Answer.css';

export const Answer = () => {
  const location = useLocation();
  const { state } = location;
  const question = state ? state.question : '';
  const [aiResponse, setAiResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
  
      try {
        const response = await fetch('http://localhost:3001/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question })
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const aiResponse = await response.json();
        setAiResponse(aiResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [question]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-4/5">
        <div className="p-8">
          <h1 className="question text-3xl font-semibold mb-4">Answer</h1>
          <p className="response text-gray-700">{aiResponse.aiResponse}</p>
          {/* Additional JSX as needed */}
        </div>
      </div>
    </div>
  );
};