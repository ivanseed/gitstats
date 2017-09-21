import { h, Component } from 'preact';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: props.query,
      order: props.order
    };
  }

  onInputChange(query) {
    this.setState({query});
    this.props.updateState({query});
  }

  onSortChange(order) {
    this.setState({order});
    this.props.updateState({order});
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
            <input id="stars" type="radio" name="order" value="stars" checked={this.state.order == 'stars'} onChange={event => this.onSortChange(event.target.id)} />
            <label className="order-stars" htmlFor="stars"></label>
          </div>
          <div className="search-order">
            <input id="updated" type="radio" name="order" value="updated" checked={this.state.order == 'updated'} onChange={event => this.onSortChange(event.target.id)} />
            <label className="order-updated" htmlFor="updated"></label>
          </div>
          <div className="search-order">
            <input id="forks" type="radio" name="order" value="forks" checked={this.state.order == 'forks'} onChange={event => this.onSortChange(event.target.id)} />
            <label className="order-forks" htmlFor="forks" alt="Forks"></label>
          </div>
        </form>
      </div>
    );
  }
};
