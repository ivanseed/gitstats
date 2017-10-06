import { h, Component } from 'preact';
import Repository from './Repository';

const RepositoryList = ({items}) => (
  <div className="repositories">
    {items.map((item, key) =>
      <Repository item={item} key={key} />
    )}
  </div>
);

export default RepositoryList;
