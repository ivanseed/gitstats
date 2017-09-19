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
      </div>
    );
  }
};
