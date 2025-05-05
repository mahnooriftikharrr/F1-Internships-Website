import Cards from './cards';
import React, { useState, useEffect } from 'react';

import './home.css';

function Home() {
        
  const [databaseInternships, setData] = useState([]);

  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
  
    const endpoint = query.trim()
      ? `http://localhost:3000/internships/title/${encodeURIComponent(query)}`
      : `http://localhost:3000/internships`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log('Filtered results:', json);
      setData(json);
    } catch (err) {
      console.error('Error fetching internships:', err);
    }
  };
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/internships');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            console.log(json);
            setData(json);
          } catch (e) {
            setError(e);
          } finally {
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className="home-container">
    <header>
        <h1>F1 Student Internships</h1>
        <h2>Find Internships that Sponsor International Students</h2>
    </header>
    
    <div className="search-container">
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-input"
          placeholder="Search for roles (e.g., Software Engineer, Data Analyst)"
          value={query}
          onChange={(e) => {
            console.log('User typed:', e.target.value); 
            setQuery(e.target.value); 
          }}
        />
        <button id="search-button" type="submit">Search</button>
      </form>
    </div>
    
    <main>
        <h2>Available Internships</h2>
        <div id="internships-container" className="internships-container">
        
         {databaseInternships.map((internship) => (
           <Cards 
            key={internship.id}
                title={internship.title}
                role={internship.role}
                company={internship.company}
                location={internship.location.replace(/['"]/g, '')}
                timeLine={internship.timeLine}
                targetclassName={internship.targetClass.replace(/['"]/g, '')}
                educationRequirement={internship.educationRequirement}
                applyUrl={internship.applyUrl}
            />
         ))}
        </div>
        
        <div id="no-results" className="no-results">
            <h3>No internships found</h3>
            <p>Try searching with different keywords</p>
        </div>
        
        <div id="loading" className="loading">
            <p>Searching for internships...</p>
        </div>
    </main>
    </div>
  );
}

export default Home;