import { h, Component } from 'preact';
import moment from 'moment';

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
        <svg fill="#3d3d3d" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <span>{item.stargazers_count}</span>
      </div>
      <div className="repository-forks">
        <svg fill="#3d3d3d" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"/>
        </svg>
        <span>{item.forks_count}</span>
      </div>
      <div className="repository-issues">
        <svg fill="#3d3d3d" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        <span>{item.open_issues_count}</span>
      </div>
    </div>
    <div className="repository-time">
      <svg fill="#3d3d3d" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <path d="M0 0h24v24H0V0z" id="a"/>
        </defs>
        <clipPath id="b">
          <use overflow="visible" xlinkHref="#a"/>
        </clipPath>
        <path clip-path="url(#b)" d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/>
      </svg>
      <span>{moment(item.updated_at).calendar()}</span>
    </div>
  </div>
);

export default repository;
