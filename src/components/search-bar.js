import { h, Component } from 'preact';

export default class SearchBar extends Component {

  onInputChange(query) {
    this.props.updateState({query});
  }

  onSortChange(order) {
    this.props.updateState({order});
  }

  renderSearchContainer(order, searchItems) {
    return searchItems.map(orderid => <div className="search-order">
      <input id={orderid} type="radio" name="order" value={orderid} checked={order == orderid} onChange={event => this.onSortChange(event.target.id)} />
      <label className={`order-${orderid}`} htmlFor={orderid}></label>
    </div>);
  }

  render({query, order}) {
    return (
      <div className="search-container">
        <div className="search-bar-container">
          <input
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
        <form className="search-order-container">
          {this.renderSearchContainer(order, ['stars', 'forks', 'updated'])}
        </form>
      </div>
    );
  }
};
