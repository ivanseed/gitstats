import { h, Component } from 'preact';
import axios from 'axios';
import Title from './title';

export default class Footer extends Component {

  state = {
    contributors: []
  };

  fetchContributers() {
    axios.get('https://api.github.com/repos/ivanseed/gitstats/contributors')
      .then(response => {
        this.setState({ contributors: response.data })
      })
      .catch(err => {
        console.log('gota error :(')
      })
  }

  componentWillMount = this.fetchContributers;

  render(props, state) {
    return (
      <div className="footer">
        <ul>
          <li id="footer-title">
            <a href="https://github.com/ivanseed/gitstats">
              <Title />
            </a>
          </li>
          <li>
            <span>Special thanks to all contributors that made this project possible!</span>
            <span>
              {state.contributors.map((contributor, i) =>
                <b className="contributor">
                  <a href={`https://github.com/${contributor.login}`}>
                    {contributor.login}
                  </a>
                  {/* Don't render comma on final name */}
                  { i + 1 === state.contributors.length ? '' : ', '}
                </b>
              )}
            </span>
          </li>
          <li>
            <span className="licence-text"><a href="https://github.com/ivanseed/gitstats/blob/master/LICENSE">MIT License Copyright (c) 2017 Ivan Seed</a></span>
          </li>
        </ul>
      </div>
    );
  }
}
