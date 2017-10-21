import { h } from 'preact';
import Repository from './repository';

const RepositoryList = ({ items, loadMore }) => (
  <div className="repositories">
    {items.map((item, key) =>
      <Repository item={item} key={key} />
    )}
    {
      // github api limits to 1000 items
      // don't show button when loading first page
      0 < items.length && items.length < 1000 &&
      <div className="load-more" onClick={loadMore}>Load More</div>
    }
  </div>
);

export default RepositoryList;
