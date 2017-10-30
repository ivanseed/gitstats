import { h, Component } from 'preact';

export default class SearchBar extends Component {

  onInputChange = query => this.props.updateState({ query });

  onSortChange = order => this.props.updateState({ order });

  onLanguageChange(language) {
    this.props.updateState({language});
  }

  renderSearchContainer(order, searchItems) {
    return searchItems.map((orderid) =>
      <div className="search-order">
        <input
          id={orderid}
          type="radio"
          name="order"
          value={orderid}
          checked={order == orderid}
          onChange={event => this.onSortChange(event.target.id)}
        />
        <label className={`order-${orderid}`} htmlFor={orderid}></label>
      </div>
    );
  }

  renderLanguageDropdown(languages) {
    return <div className="custom-selectbox"><select className="language-dropdown" onChange={event => this.onLanguageChange(event.target.value)}>
      {languages.map(language => {
        return <option value={language} className="language-dropdown-option"><span >{language}</span></option>;
      })}
    </select></div>
  }

  render({query, order, languages}) {
    return (
      <div className="search-container">
        <div className="search-bar-container">
          <input
            className="search-bar"
            placeholder="Search..."
            value={query}
            spellcheck="false"
            onChange={event => this.onInputChange(event.target.value)}
          />
          <img
            className="search-icon"
            alt=""
            src="/assets/icons/search-icon.svg"
          />
        </div>
        <div className="filter-container">
          {this.renderLanguageDropdown(languages)}
          <form className="search-order-container">
            {this.renderSearchContainer(order, ['stars', 'forks', 'updated'])}
          </form>
        </div>
      </div>
    );
  }
};
