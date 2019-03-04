// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = ()  => {    
    const buttonStyle = {backgroundColor: 'blue', color: 'white'};
    const buttonText = {text: 'Click me'}

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>          
            <input id="name" type="text"/>
            <button style={buttonStyle}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')  
);
