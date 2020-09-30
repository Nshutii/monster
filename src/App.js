import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Box } from './components/my-box/box';
import { Display } from './components/my-display/display'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ' ',
      searchBox: '',
      finalList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  handleChanges = (e) => {
    this.setState({ searchBox: e.target.value });


  }
  handleSubmit = (e) => {



    this.setState({
      searchBox: this.state.searchBox,
      finalList: this.state.searchBox.split(",", 10)
    },
      console.log(this.state.finalList, this.state.searchBox)
    );



  }

  handleList = () => (
    <select name="colors" id="">

      <optgroup label="Select">

        {this.state.finalList.map((list, idx) => (
          <option value={list} key={idx}>{list}</option>

        ))
        }
      </optgroup>


    </select>
  )

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())


    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <Box placeholder="Enter colors " handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} />

        <Display handleList={this.handleList} />

        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}

        />
        <CardList monsters={filteredMonsters} />




      </div>
    );
  }
}

export default App;
