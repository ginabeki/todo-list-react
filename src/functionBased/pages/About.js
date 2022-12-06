import React from 'react';

const About = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5rem',
    flexDirection: 'column',
  }}
  >
    <h1>About</h1>

    <p style={{ padding: '2rem' }}>
      In this app, you can add, delete, submit and edit items.
      To edit items, simply double click on it.
      Once you are done, press the enter key to resubmit.
      This app will persist your data in the browser local storage.
      So whether you reload, close your app or reopened it,
      you still have access to your to-dos items.
    </p>
  </div>
);

export default About;
