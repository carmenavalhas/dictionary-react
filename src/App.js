import logo from "./logo.png"
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid"
        alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className=" App-footer text-center">
        2023, React - {" "} 
        <a href="https://github.com/carmenavalhas/dictionary-react">open source</a> ⎪ coded by {" "}
        <a href="https://carmenavalhas-portfolio.netlify.app/">Carmen Navalhas</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
