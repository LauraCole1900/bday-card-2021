import quotes from "./quotes.json";
import Birthday from "./components/birthday";
import './App.css';

function App() {
  return (
    <Birthday quotes={quotes} />
  );
}

export default App;
