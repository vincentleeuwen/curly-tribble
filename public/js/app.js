// console.log(React);
class Hello extends React.Component {
  render() {
    return React.createElement('h3', null, 'Hello from React!');
  }
}

ReactDOM.render(React.createElement(Hello), document.getElementById('app'));