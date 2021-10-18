import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Services from './Pages/Home/Services/Services';
import Header from './Pages/Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
    </div>
  );
}

export default App;
