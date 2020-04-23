class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    console.log(this.state.isActive);
    const tekst = "orem ipsum dolor sit amet, consectetur adipiscing elit.";

    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isActive ? "ukryj" : "pokaz"}
        </button>
        {this.state.isActive && <p>{tekst}</p>}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
