import { h, Component } from 'preact';
import Repository from './Repository';

const repositoryList = ({items}) => (
  <div className="repositories">
    {items.map((item, key) => {
      return <Repository item={item} key={key} />
    })}
  </div>
);

export default repositoryList;
