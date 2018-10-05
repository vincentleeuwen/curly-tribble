import React from 'react';
import ReactDOM from 'react-dom';
import API from './api';

class Main extends React.Component {
  async componentDidMount() {
    let links = await API.fetchLinks();
    console.log(links);
  }
  render() {
    return (
      <div>
        <h3>Links</h3>
        <ul>
          <li>Link ...</li>
          <li>Link ...</li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));