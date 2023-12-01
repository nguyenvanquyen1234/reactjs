// App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';
import './Student.css';

function App() {
  const students = [
    { id: 1, name: 'Iron man', image: 'https://upload.wikimedia.org/wikipedia/vi/e/e0/Iron_Man_bleeding_edge.jpg', email: 'ironman@gmail.com' },
    { id: 2, name: 'Batman', image: 'https://vtv1.mediacdn.vn/zoom/640_400/2022/12/28/281222-batman-1672198226783587873379-crop-16721982474831580773596.jpg', email: 'batman@gmail.com' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Student List
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a> */}

        {/* Render the list of students using the Student component */}
        <div className="students-list">
          {students.map((student) => (
            <Student key={student.id} {...student} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
