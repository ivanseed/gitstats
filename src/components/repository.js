import { h, Component } from 'preact';
import format from 'date-fns/format';
import { StarIcon, ForkIcon, IssueIcon, TimeIcon } from "./icons";

const repository =  ({item}) => (
  <div className="repository">
    <div className="repository-name">
      <a href={item.html_url}><span>{item.owner.login}/<b>{item.name}</b></span></a>
    </div>
    <div className="repository-description">
      <span>{item.description}</span>
    </div>
    <div className="repository-stats">
      <div className="repository-stars">
        <StarIcon />
        <span>{item.stargazers_count}</span>
      </div>
      <div className="repository-forks">
        <ForkIcon />
        <span>{item.forks_count}</span>
      </div>
      <div className="repository-issues">
        <IssueIcon />
        <span>{item.open_issues_count}</span>
      </div>
    </div>
    <div className="repository-time">
      <TimeIcon />
      <span>{format(item.updated_at, 'HH:mm:ss')}</span>
      <span>{format(item.updated_at, 'YYYY/MM/DD')}</span>
    </div>
  </div>
);

export default repository;
