// import logo from "./logo.png"; //
// -----> put where I want to appear: <------ //
// <img src={logo} className="App-logo" alt="logo" /> //

import Dictionary from './Dictionary';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <h1 className='pb-4'>DICTIONARY</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="aesthetic" />
        </main>
       <footer class="ps-5 pe-5">
          <div class="row d-flex justify-content-center">
             <div class="col-lg-6">
            2023, open {" "}
            <a 
            href="https://github.com/carmenavalhas/dictionary-react" 
            target="_blank"
            rel="noopener noreferrer">source</a>
             {" "} ⎪ coded by {" "}
            Carmen Navalhas
          </div>
          </div>
              </footer>


      </div>
    </div>
  );
}

export default App;