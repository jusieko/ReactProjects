const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active);
  const number = activeItems.length;
  return (
    <header>
      <h2>wielkosc zamowienia:{number}</h2>
      <h2>
        do zaplaty:
        {number ? `${number * 10} zlotych` : "nie kupujesz, to nie placisz"}
      </h2>
    </header>
  );
};
