import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // guarda o valor que vamos passar no input
      search: '',
      // url das imagens
      result: []
    }
  }

  handleInput = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.setState({result: []})
    // const API_KEY = 'aWsB23hz13LO1YGslbZqZTBGDiRDwMKv';
    // const API_URL =   `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=${API_KEY}`;

    const API_URL = `https://swapi.co/api/people/?search=${this.state.search}`


    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        search: '',
        result: data.results
      }, () => {
        console.log(this.state.result)
      })
    })
    .catch(error => console.log('error', error))
  }

  render() {
    return (
    <section className='container'>
      <div className='search-bar'>
        <input type='text' onChange={this.handleInput} value={this.state.search}/>
        <button onClick={this.handleSubmit}>search</button>
      </div>
      <div className='result'>
          {
            this.state.result.map((item, id) => {
             return(
              <ul key={id}>
                <li>
                  <p>name: {item.name}</p>
                </li>
                <li>
                  <p>height: {item.height}</p>
                </li>
                <li>
                  <p>mass: {item.mass}</p>
                </li>
                <li>
                  <p>hair_color: {item.hair_color}</p>
                </li>
                <li>
                  <p>skin_color: {item.skin_color}</p>
                </li>
                <li>
                  <p>eye_color: {item.eye_color}</p>
                </li>
                <li>
                  <p>birth_year: {item.birth_year}</p>
                </li>
                <li>
                  <p>gender: {item.gender}</p>
                </li>
                <li>
                  <p>homeworld: {item.homeworld}</p>
                </li>
              </ul>
             )
            })
          }
      </div>
    </section>
    );
  }
}

export default App;
