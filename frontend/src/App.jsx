import "./App.css";

function App() {
  return (
    <>
      <div>
        <p>Hello World</p>
        <Text message="New text 1" />
        <Text message="New text 2" />
      </div>
    </>
  );
}

function Text({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default App;
