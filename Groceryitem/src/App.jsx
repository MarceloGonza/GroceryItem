import GroceryItem from "./GroceryItem";

function App() {
  const handleClick = (item) => {
    alert(`You clicked on ${item}`);
  };
  return (
    <>
      <GroceryItem name="Eggs" onClick={() => handleClick("Eggs")} />
      <GroceryItem name="Banana" onClick={() => handleClick("Banana")} />
      <GroceryItem
        name="Strawberry"
        onClick={() => handleClick("Strawberry")}
      />
      <GroceryItem name="Bread" onClick={() => handleClick("Bread")} />
    </>
  );
}

export default App;
