import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// ReactDOM.render(<App />, document.getElementById('root'));


// import ReactDOM from 'react-dom';
// import App from './App';

const container = document.getElementById('root');


const root = ReactDOM.createRoot(container);

root.render(<App />);