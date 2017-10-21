import { h } from 'preact';
import Repository from './repository';

const RepositoryList = ({ items }) => (
  <div className="repositories col-md-6">
    {items.map((item, key) =>
      <Repository item={item} key={key} />
    )}
  </div>
);

export default RepositoryList;
