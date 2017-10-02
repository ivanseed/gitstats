import { h, Component } from 'preact';
import axios from 'axios';
import NProgress from '../lib/nprogress.js';
import SearchBar from './search-bar';
import RepositoryList from './repository-list';
import '../style/nprogress.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      order: 'stars',
      items: []
    };
    
    this.updateState = this.updateState.bind(this);
  }

  updateState(data) {
    this.setState(data);
    this.searchGitHub();
  }

  componentWillMount() {
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
        console.log('gota error');
      });
  }

  buildUrl() {
    let filter;

    if (this.state.order === 'updated') {
      let dateFilter = new Date();
      dateFilter.setDate(dateFilter.getDate() - 30);

      let dateString = dateFilter.toISOString().substring(0, 10);

      filter = `pushed:>=${dateString}`;
    } else {
      filter = `${this.state.order}:>=1`;
    }

    return `https://api.github.com/search/repositories?q=${this.state.query}+${filter}&sort=${this.state.order}`;
  }

  render(props, state) {
    return (
      <div id="app">
        <div className="title">
          <span>Git<b>Stats</b></span>
        </div>
        <SearchBar
          updateState={this.updateState}
          query={state.query}
          order={state.order}
        />
        <RepositoryList
          items={state.items}
        />
      </div>
    );
  }
}
