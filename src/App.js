import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bassplayers: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/CodingDesigns/basslist/bassPlayer"
    )
      .then((response) => response.json())
      .then((bassPlayer) => this.setState({ bassplayers: bassPlayer }));
  }
  render() {
    const { bassplayers, searchField } = this.state;
    const filteredBassplayers = bassplayers.filter((bassPlayer) =>
      bassPlayer.style.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Bass Rolodex</h1>
        <hr />
        <p>
          <span>Are you</span> more into jazz, fusion or groove ?&nbsp;
          <span>Find out</span> which bass player you must listen to !
        </p>
        <SearchBox
          placeholder="Type your word here !"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList bassplayers={filteredBassplayers}></CardList>
        <p>In fact, you should listen to all of them ! 😉</p>
      </div>
    );
  }
}

export default App;
