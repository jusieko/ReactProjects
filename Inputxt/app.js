class App extends React.Component {
  state = {
    val: "",
  };

  // handleChange(e) {
  //   console.log(e.target.value);
  //   this.setState({
  //     val: e.target.value,
  //   });
  // }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      val: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      val: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.val}
          placeholder="wpisz..."
          onChange={this.handleChange.bind(this)}
          type="text"
        />
        <button onClick={this.handleClick}>Reset</button>
        <h1 className="title">{this.state.val.toUpperCase()}</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
