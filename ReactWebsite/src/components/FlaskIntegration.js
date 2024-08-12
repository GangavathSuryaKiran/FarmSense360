import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlaskIntegration = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        });
        setHtmlContent(response.data);
      } catch (error) {
        console.error('Error fetching data from Flask:', error);
      }
    };

    fetchData();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default FlaskIntegration;
