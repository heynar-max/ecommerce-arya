
import './Style.css';
import { NavBar } from './components/navbar/NavBar';
import { Card } from './components/card/Card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Card/>
      </header>
    </div>
  );
}

export default App;
