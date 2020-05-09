import React from 'react';
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";


function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <Header />
          <Search />
        </div>
      </header>
    </div>
  );
}

export default App;
