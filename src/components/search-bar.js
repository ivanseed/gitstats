import { h, Component } from 'preact';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  onInputChange(query) {
    this.setState({query});
    this.props.updateState({query});
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-bar-container">
          <input
            className="search-bar"
            placeholder="Search..."
            value={this.state.query}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
        <form className="search-order-container">
          <div className="search-order">
            <input id="stars" type="radio" name="order" value="stars" />
            <label className="order-stars" for="stars"></label>
          </div>
          <div className="search-order">
            <input id="watchers" type="radio" name="order" value="watchers" />
            <label className="order-watchers" for="watchers"></label>
          </div>
          <div className="search-order">
            <input id="forks" type="radio" name="order" value="forks" />
            <label className="order-forks" for="forks" alt="Forks"></label>
          </div>
        </form>
      </div>
    );
  }
};
