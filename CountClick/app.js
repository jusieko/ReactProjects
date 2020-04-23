class Counter extends React.Component {
  state = {
    conut: 0,
    result: this.props.result,
  };

  handleMathClick = (type, number = 1) => {
    if (type === "subtraction") {
      this.setState((prevState) => ({
        conut: prevState.conut + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        conut: prevState.conut + 1,
        result: 0,
      }));
    } else if (type === "add") {
      this.setState((prevState) => ({
        conut: prevState.conut + 1,
        result: prevState.result + number,
      }));
    }
  };
  render() {
    return (
      <>
        {/* <button onClick={this.handleMathClick.bind(this, "substraction", 10)}>
          -10
        </button>
        <button
          onClick={() => {
            this.handleMathClick("substraction", 1);
          }}
        >
          -1
        </button>
        <button onClick={this.handleMathClick.bind(this, "reset")}>
          Reset
        </button>
        <button onClick={this.handleMathClick.bind(this, "add", 1)}>+1</button>
        <button onClick={this.handleMathClick.bind(this, "add", 10)}>
          +10
        </button>
        <h1>Liczba klikniec: {this.state.conut} </h1>
        <h1>Wynik: {this.state.result} </h1> */}

        <MathButton
          name="-10"
          number="10"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton name="reset" type="reset" click={this.handleMathClick} />
        <MathButton
          name="10"
          number="10"
          type="add"
          click={this.handleMathClick}
        />
        <MathButton
          name="1"
          number="1"
          type="add"
          click={this.handleMathClick}
        />
        <ResultPanel conut={this.state.conut} result={this.state.result} />
      </>
    );
  }
}

const MathButton = (props) => {
  const number = parseInt(props.number);
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};
const ResultPanel = (props) => {
  return (
    <>
      <h1>
        Liczba klikniec: {props.conut}
        {props.conut > 10 ? <span> . Przeciazenie procesora</span> : null}
      </h1>
      <h1>Wynik: {props.result} </h1>
    </>
  );
};
const start = 0;
ReactDOM.render(<Counter result={start} />, document.getElementById("root"));
