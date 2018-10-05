import React from 'react';
import ReactDOM from 'react-dom';
import API from './api';
import LinkStore from './stores/LinkStore';

const _getAppState = () => {
  return { links: LinkStore.getAll() };
};

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }
  async componentDidMount() {
    LinkStore.on('change', this.onChange);
    await API.fetchLinks();
  }
  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }
  onChange() {
    this.setState(_getAppState());
  }
  render() {
    let content = this.state.links.map(link => {
      return (
        <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )
    });
    return (
      <div>
        <h3>Links</h3>
        <ul>
          { content }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));