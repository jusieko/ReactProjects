const Element = (props) => {
  return (
    <li>
      <p>{props.name}</p>
      <button onClick={() => props.method(props.name)}>usun</button>
    </li>
  );
};

class App extends React.Component {
  state = {
    person: ["janek o", "kamil m", "anita h"],
  };
  handleClick = (name) => {
    var person = this.state.person.filter((per) => {
      if (name === per) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({
      person,
    });
  };
  render() {
    var lista = this.state.person;

    lista = lista.map((person) => {
      var count = 0;

      return (
        <Element
          method={this.handleClick}
          name={person}
          key={lista.indexOf(person)}
        />
      );
    });

    return <ul>{lista}</ul>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
