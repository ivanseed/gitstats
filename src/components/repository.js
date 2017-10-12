import { h } from 'preact';
import format from 'date-fns/format';
import {
  StarIcon,
  RepoForkedIcon,
  IssueOpenedIcon,
  CodeIcon,
  HistoryIcon,
  CalendarIcon
} from 'react-octicons';

const getLanguageDisplayStyle = (language) =>
  `display: ${language ? 'auto' : 'none'}`;

const Repository =  ({ item }) => (
  <div className="repository">
    <div className="repository-name">
      <a href={item.html_url}>
        <span>{item.owner.login}/<b>{item.name}</b></span>
      </a>
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
        <RepoForkedIcon />
        <span>{item.forks_count}</span>
      </div>
      <div className="repository-issues">
        <IssueOpenedIcon />
        <span>{item.open_issues_count}</span>
      </div>
    </div>
    <div
      className="repository-language"
      style={getLanguageDisplayStyle(item.language)}
    >
      <CodeIcon />
      <span>{item.language}</span>
    </div>
    <div className="repository-time">
      <div>
        <HistoryIcon />
        <span>{format(item.pushed_at, 'HH:mm:ss')}</span>
        <span>{format(item.pushed_at, 'YYYY/MM/DD')}</span>
      </div>
      <div className="repository-created">
        <CalendarIcon />
        <span>{format(item.created_at, 'YYYY/MM/DD')}</span>
        <span>{format(item.created_at, 'HH:mm:ss')}</span>
      </div>
    </div>
  </div>
);

export default Repository;
