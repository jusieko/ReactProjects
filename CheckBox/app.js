const PositiveMessage = () => <p>Mozesz obejrzec film</p>;
const NegativeMessage = () => <p>Nie mozesz obejrzec tego filmu</p>;

class CheckboxConfirm extends React.Component {
  state = {
    isConfirmed: false,
  };
  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else {
      return <NegativeMessage />;
    }
  };
  render() {
    return (
      <>
        <h1>Kup bilet na horror!</h1>
        <input
          type="checkbox"
          id="age"
          onChange={() => {
            this.setState({
              isConfirmed: !this.state.isConfirmed,
            });
          }}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.displayMessage()}
      </>
    );
  }
}
ReactDOM.render(<CheckboxConfirm />, document.getElementById("root"));
