import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // (In the order that they occur)

    // Good place to do one-time setup
    // Overriding constructor in React.Component    
    constructor(props) {
        // Call constructor in React.Component
        super(props);
        
        // THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };
    }

    // Avoid doing anything besides returning JSX
    // React requires a render method
    render() {        
        if(this.state.errorMessage && !this.state.lat)     {
            return <div>Error: {this.state.errorMessage}</div>            
        }
        
        if(!this.state.errorMessage && this.state.lat)     {
            return <div>Latitude: {this.state.lat}</div>            
        }
                
        return <div>Loading</div>                
    }

    // Content is now visible on the screen

    // Good place to do data-loading!
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat :position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })  
        );
        
        console.log('the component rendered')
    }
        
    // Good place to do more data-loading when state/props change
    componentDidUpdate() {
        console.log('the component updated')
    }
    
    // Sit and wait until this component is no longer shown. 
    // Good place to do cleanup (especially for non-React stuff)
    componentWillUnmount() {

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

