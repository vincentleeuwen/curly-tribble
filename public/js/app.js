import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from React'
    }
  }
  render() {
    return React.createElement('h3', null, this.state.message);
  }
}

ReactDOM.render(React.createElement(Hello), document.getElementById('app'));