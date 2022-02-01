import './App.css';
import Header from './components/header';
import Screen from './components/screen'
import About from './components/about'
import Feedback from './components/feedback'
import Footer from './components/footer';

function App() {

  return (
    <>
      <div className="App">
        <div className="bg-div">
          <Header />
          <Screen />
        </div>
        <About />
        <Feedback />
      </div>
      <Footer />
    </>
  )
}

export default App;
