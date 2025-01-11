import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './pages/Body/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
