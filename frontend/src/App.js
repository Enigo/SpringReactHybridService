import './App.css';
import {Component} from "react";

class App extends Component {

    state = {
        animals: []
    }

    componentDidMount() {
        fetch("/zoo/all")
            .then((response) => response.json())
            .then((data) => this.setState({animals: data}));
    }

    render() {
        return <div className="App">
            <div className="App-header">
                {this.state.animals.map(animal => {
                    return (
                        <p>Learn more about {animal} on <a target="_blank"
                                                           href={"https://en.wikipedia.org/wiki/" + animal}>Wikipedia</a>
                        </p>
                    )
                })}
            </div>
        </div>
    }
}

export default App;