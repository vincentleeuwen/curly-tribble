import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import API from './api';
import LinkStore from './stores/LinkStore';
import 'babel-polyfill';

const _getAppState = () => {
  return { links: LinkStore.getAll() };
};

class Main extends Component {
  static propTypes = {
    limit: PropTypes.number
  }
  static defaultProps = {
    limit: 3
  }
  state = _getAppState();

  async componentDidMount() {
    LinkStore.on('change', this.onChange);
    await API.fetchLinks();
  }
  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }
  onChange = () => {
    this.setState(_getAppState());
  }
  render() {
    const { limit } = this.props;
    let content = this.state.links.slice(0, limit).map(link => {
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
