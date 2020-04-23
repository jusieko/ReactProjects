// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
// const NegativeMessage = () => (
//   <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>
// );
// const displayMessage = (isConfirmed, isFromSubmitted) => {
//   if (isFromSubmitted) {
//     if (isConfirmed) {
//       return <ValidationMessage text="Możesz obejrzeć film. Zapraszamy" />;
//     } else {
//       return (
//         <ValidationMessage text="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
//       );
//     }
//   } else {
//     return null;
//   }
// };

const ValidationMessage = (props) => {
  const { text } = props;
  return <p>{text}!</p>;
};
const OrderForm = (props) => {
  const { submit, change, isConfirmed } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />

      <label htmlFor="age">Mam co najmniej 16 lata</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFromSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFromSubmitted: false,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFromSubmitted) {
      this.setState({
        isFromSubmitted: true,
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFromSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage text="Możesz obejrzeć film. Zapraszamy" />;
      } else {
        return (
          <ValidationMessage text="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
        );
      }
    } else {
      return null;
    }
  };
  render() {
    const { isConfirmed, isFromSubmitted } = this.state;

    console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          isConfirmed={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
