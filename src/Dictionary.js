import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "442601ab0f43da939c1bto9077411c63";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

return ( 
  <div className="Dictionary">
    <section>
    <form onSubmit={search}>
    <input type="search" 
    onChange={handleKeywordChange}
    autoFocus={true} />
    </form>
    </section>
    <Results results={results} />
  </div>
  );
}