class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     napis: "",
  //   };
  // }
  state = {
    napis: "",
    // btn : "uruchom"
  };
  handleClick = () => {
    //this.state.napis += "a";
    //console.log(this.state.napis);
    console.log(this);
    const letter = "a";
    // this.setState({
    //   napis: (this.state.napis += letter),
    // });
    const number = Math.floor(Math.random() * 10);
    this.setState((prevState) => ({
      napis: this.state.napis + number,
    }));
  };

  render() {
    //const btnName = "Stworz liczbe"
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.btnTitle}
        </button>
        {/* <h1>{this.state.napis}</h1> */}
        <PanelResult napis={this.state.napis} />
      </>
    );
  }
}

const PanelResult = (props) => {
  return <h1>{props.napis}</h1>;
};

ReactDOM.render(
  <App btnTitle="dodaj cyfre" />,
  document.getElementById("root")
);
