var App = function(props) {
  return <h1>Hello {props.name}</h1>;
};

ReactDOM.render(<App name="World" />, document.getElementById('app'));
