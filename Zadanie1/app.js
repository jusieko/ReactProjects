class App extends React.Component {
  state = {
    text: "tresc",
    wrozby: ["wrozba1", "wrozba2", "wrozba3"],
  };

  handleClick = () => {
    var los = Math.round(Math.random() * this.state.wrozby.length + 0.5) - 1;
    console.log(los);
    console.log(this.state.wrozby[los]);
    this.setState({
      text: this.state.wrozby[los],
    });
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  };
  handleAdd = (text) => {
    console.log(text);
    var updatedWrozby = this.state.wrozby;
    updatedWrozby.push(text);
    this.setState({
      wrozby: updatedWrozby,
      text: "",
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Losuj</button>
        <br />
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        ></input>
        <button onClick={() => this.handleAdd(this.state.text)}>
          Dodaj wrozbe
        </button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
