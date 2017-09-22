import { h, Component } from 'preact';
import SearchBar from './search-bar';
import axios from 'axios';
import NProgress from 'nprogress';
import '../style/nprogress.css';

// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      order: 'stars',
      items: []
    };
  }

  updateState(data) {
    this.setState(data);
    this.searchGitHub();
  }

  searchGitHub() {
    NProgress.start();
    axios.get(this.buildUrl())
      .then((response) => {
        NProgress.done();
        this.setState({
          'items': response.data.items
        });
      })
      .catch((err) => {
        NProgress.done();
        console.log('gota error');
      });
  }

  buildUrl() {
    let filter;

    if (this.state.order === 'updated') {
      let dateFilter = new Date();
      dateFilter.setDate(dateFilter.getDate() - 30);

      let dateString = dateFilter.toISOString().substring(0, 10);

      filter = `pushed:&gt;=${dateString}`;
    } else {
      filter = `${this.state.order}:&gt;=0`;
    }

    return `https://api.github.com/search/repositories?q=${this.state.query}+${filter}&sort=${this.state.order}`;
  }

  render() {
    return (
      <div id="app">
        <h1>GitStats</h1>
        <SearchBar
          updateState={this.updateState.bind(this)}
          query={this.state.query}
          order={this.state.order}
        />
      </div>
    );
  }
}
