import './App.css'
import './EngineeringTopics.js'
import EngineeringTopics from './EngineeringTopics.js'

function App() {
  const currentyear = new Date().getFullYear()
  var isLoggedIn = false
  let message = (isLoggedIn) ? "Welcome back!" : "Please log in."
  return (
    <div>
      <EngineeringTopics />
    </div>
  );
}

export default App;
