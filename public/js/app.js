import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from React mister'
    }
  }
  render() {
    return (
      <div>
        <h2>Hello in JSX!</h2>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));