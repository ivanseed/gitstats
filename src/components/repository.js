import { h } from 'preact';
import format from 'date-fns/format';
import {
  StarIcon,
  RepoForkedIcon,
  IssueOpenedIcon,
  CodeIcon,
  HistoryIcon
} from 'react-octicons';

const getLanguageDisplayStyle = (language) =>
  `display: ${language ? 'auto' : 'none'}`;

const Repository =  ({ item }) => (
  <a className="repository" href={item.html_url} target="_blank">
    <div>
      <div className="repository-name">
        <span>{item.owner.login}/<b>{item.name}</b></span>
      </div>
      <div className="repository-description">
        <span>{item.description}</span>
      </div>
      <div class="repository-meta-container">
        <div>
          <div
            className="repository-meta repository-language"
            style={getLanguageDisplayStyle(item.language)}
          >
            <CodeIcon />
            <span>{item.language}</span>
          </div>
          <div className="repository-meta repository-time">
            <HistoryIcon />
            <span>{format(item.pushed_at, 'HH:mm:ss')}</span>
            <span>{format(item.pushed_at, 'YYYY/MM/DD')}</span>
          </div>
        </div>
        <div className="repository-meta repository-stats">
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
      </div>
    </div>
  </a>
);

export default Repository;
