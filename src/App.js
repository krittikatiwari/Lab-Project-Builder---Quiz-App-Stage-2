import './App.css';
import Home from './components/home';
import Body from './components/body';
import Result from './components/result';
import data from './components/resources/resourse';

function App() {
  return (
    <div className="App">
      <div className='front'>
      <Home/>
      </div>
      <div className='mid'>
      <Body abc={data}/>
      </div>
      <div className='end'>
      <Result/>
      </div>
    </div>
  );
}

export default App;
