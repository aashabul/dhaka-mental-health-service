
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Services from './Pages/Home/Services/Services';
import Header from './Pages/Components/Header/Header';
import Footer from './Pages/Components/Footer/Footer';
import Banner from './Pages/Home/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
