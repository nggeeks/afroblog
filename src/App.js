import logo from './logo.svg';
import './App.css';
import Header from './components/header'; 

function App() {
  return (
    <div className="App">
    <Header logo={logo} text={'React Afroblog'}/>
    </div>
  );
}

export default App;
