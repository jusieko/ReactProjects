// const Dollars = (props) => {
//   return (
//     <div>
//       wartosc w Dolarach:
//       {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}
//     </div>
//   );
// };
// const Euros = (props) => {
//   const value = (props.cash / props.ratio).toFixed(2);
//   return <div>wartosc w Euro:{props.cash <= 0 ? "" : value}</div>;
// };
const Cash = (props) => {
  return (
    <div>
      {props.title}{" "}
      {props.cash <= 0
        ? ""
        : ((props.cash / props.ratio) * props.price).toFixed(2)}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "gas",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };
  static defaultProps = {
    currencies: [
      { id: 1, name: "Dollar", ratio: 3.6, title: "wartosc w dolarach:" },
      { id: 2, name: "Euro", ratio: 4.1, title: "wartosc w Euro:" },
      { id: 3, name: "Pound", ratio: 4.6, title: "wartosc w funtach:" },
      { id: 0, name: "Zloty", ratio: 1, title: "wartosc w zlotowkach:" },
    ],
    prices: {
      electricity: 0.51,
      gas: 4.75,
      oranges: 3.5,
    },
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleSelectChange = (e) => {
    this.setState({
      product: e.target.value,
      amount: "",
    });
  };
  inserSuffix(select) {
    if (select === "electricity") return <em>kWh</em>;
    else if (select === "gas") return <em>liter</em>;
    else if (select === "oranges") return <em>kg</em>;
  }
  selectPrice(product) {
    //console.log(this.props.prices[product]);
    const price = this.props.prices[product];
    return price;
  }

  render() {
    const { amount } = this.state;
    const price = this.selectPrice(this.state.product);
    const calculators = this.props.currencies.map((curency) => {
      return (
        <Cash
          price={price}
          key={curency.id}
          cash={amount}
          ratio={curency.ratio}
          title={curency.title}
        />
      );
    });
    return (
      <div className="app">
        <label>
          Wybierz produkt:
          <select value={this.state.product} onChange={this.handleSelectChange}>
            <option value="electricity">prad</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarancze</option>
          </select>
        </label>
        <br />
        <label>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            type="number"
          />
          {this.inserSuffix(this.state.product)}
        </label>

        {calculators}
      </div>
    );
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
