import Register from './Register';

function App() {
  return (
    <div>
      <div hidden>Testing</div>
      <Register handleRegister={console.log} />
    </div>
  );
}

export default App;
