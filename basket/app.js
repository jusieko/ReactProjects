class App extends React.Component {
  state = {
    availavleProducts: 8,
    shoppingCart: 2,
  };
  handleClick = (sign) => {
    if (sign === "+") {
      this.setState({
        shoppingCart: this.state.shoppingCart + 1,
      });
    } else if (sign === "-") {
      this.setState({
        shoppingCart: this.state.shoppingCart - 1,
      });
    }
  };
  handleBuy = () => {
    this.setState({
      availavleProducts: this.state.availavleProducts - this.state.shoppingCart,
    });
  };

  render() {
    const { shoppingCart, availavleProducts } = this.state;
    const style =
      this.state.shoppingCart === 0
        ? {
            // backgroundColor: "red",
            opacity: 0.3,
          }
        : {};
    return (
      <div>
        <button
          disabled={shoppingCart ? false : true}
          onClick={() => this.handleClick("-")}
        >
          -
        </button>

        <span style={style}>{shoppingCart}</span>

        <button
          disabled={shoppingCart >= availavleProducts ? true : false}
          onClick={() => this.handleClick("+")}
        >
          +
        </button>
        {shoppingCart ? <button onClick={this.handleBuy}>Kup</button> : true}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
