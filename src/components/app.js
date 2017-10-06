import { h, Component } from 'preact';
import Helmet from 'preact-helmet';
import axios from 'axios';
import Progress from './Progress';
import SearchBar from './SearchBar';
import RepositoryList from './RepositoryList';
import Footer from './Footer';

export default class App extends Component {

  state = {
    query: '',
    order: 'stars',
    items: []
  };

  updateState = (data) => {
    this.setState(data);
    this.searchGitHub();
  }

  componentWillMount() {
    this.searchGitHub();
  }

  searchGitHub = () => {
    this.setState({
      'progress': 'start'
    });
    axios.get(this.buildUrl())
      .then((response) => {
        this.setState({
          'items': response.data.items,
          'progress': 'end'
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
        <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          meta={[
            {name: "description", content: "A simple PreactJS app that uses the GitHub search API to display repositories in a list."}
          ]}
          title="GitStats"
        />
        <Progress status={state.progress} />
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
        <Footer />
      </div>
    );
  }
}
