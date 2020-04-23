class Form extends React.Component {
  state = {
    city: "",
    text: "",
    isLoved: true,
    number: "2",
  };
  // handleCityChange = (e) => {
  //   this.setState({
  //     city: e.target.value,
  //   });
  // };

  // handleTextChange = (e) => {
  //   this.setState({
  //     text: e.target.value,
  //   });
  // };

  // handleIsLovedChange = (e) => {
  //   this.setState({
  //     isLoved: e.target.checked,
  //   });
  // };
  // handleVisitsNumberChanged(e) {
  //   this.setState({
  //     number: e.target.value,
  //   });
  // }

  handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Napisz cos o tym miescie
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></textarea>
        </label>

        <label>
          Czy lubisz to miasto?
          <input
            name="isLoved"
            checked={this.state.isLoved}
            onChange={this.handleChange}
            type="checkbox"
          />
        </label>
        <label>
          Ile razy byliscie w tym miescie?
          <select
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">wiecej</option>
          </select>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
