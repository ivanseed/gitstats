import { h, Component } from 'preact';
import SearchBar from './search-bar';

// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {

  updateState(data) {
    this.setState(data);
  }

  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  render() {
    return (
      <div id="app">
        <h1>GitStats</h1>
        <SearchBar updateState={this.updateState.bind(this)} query={this.props.query} />
        <h1>Hiya</h1>
      </div>
    );
  }
}
