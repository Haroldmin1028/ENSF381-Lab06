import './App.css'

function App() {
  const currentyear = new Date().getFullYear()
  var isLoggedIn = false
  let message = (isLoggedIn) ? "Welcome back!" : "Please log in."
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React components</p>
      <p>Current years: {currentyear}</p>
      <p>{message}</p>
    </div>
  );
}

export default App;
