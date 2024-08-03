import logo from './logo.svg';
import './App.css';
import React ,{Component} from'react'
class App extends Component{
  constructor() {
    super()
    this.state = {
        loading: false,
        character: {}
    }
}

componentDidMount() {
    this.setState({loading: true})
    fetch("https://wolnelektury.pl/api/kinds/dramat/")
        .then(response => response.json())
        .then(data => {
            this.setState({
              loading:false,
                character: data
            })
        })
}


render ()
{
  const text = this.state.loading ? "loading..." : this.state.character.name
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello
        </a>
        <p>{text}</p>
      </header>
    </div>
  );
}
}
export default App;
