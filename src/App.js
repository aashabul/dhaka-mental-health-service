
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Components/Header/Header';
import Footer from './Pages/Components/Footer/Footer';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
