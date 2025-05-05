import Cards from './cards';
import React, { useState, useEffect } from 'react';

import './home.css';

function Home() {
        
  const [databaseInternships, setData] = useState([]);

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
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
    <body>
    <header>
        <h1>F1 Student Internships</h1>
        <p>Find internships that sponsor international students</p>
    </header>
    
    <div className="search-container">
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-input"
          placeholder="Search for roles (e.g., Software Engineer, Data Analyst)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
    
    <script>
        {/* // Sample database internships
        // Replacing this with a dynamic call to a real database eventually
    // let databaseInternships = []; */}

    {/* // async function fetchInternships() { */}
        {/* // const res = await fetch('http://localhost:3000/internships');
        // databaseInternships = await res.json();
        // displayInternships(databaseInternships);


    // window.onload = fetchInternships; */}

        

        

        
    </script>
<script>
    {/* (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9388ed14b1879375',t:'MTc0NjAzNTg5NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})(); */}
    </script>
    </body>
  );
}

export default Home;