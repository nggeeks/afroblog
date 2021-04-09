import logo from './logo.svg';
import './App.css';
import Header from './components/header'; 
import Search from './components/search';

function App() {

  const onSearchTermChanged = (event) => {
    console.log(event.target.value);
  }
  return (
    <div className="App">
    <Header logo={logo} text={'React Afroblog'}/>
    <Search placeHolder={'search post by title...'} onSearchTermChanged={onSearchTermChanged}/>
    </div>
  );
}

export default App;
