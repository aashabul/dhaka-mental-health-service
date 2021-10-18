
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Services from './Pages/Home/Services/Services';
import Header from './Pages/Components/Header/Header';
import Footer from './Pages/Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
