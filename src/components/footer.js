import { h, Component } from 'preact';
import axios from 'axios';

export default class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contributors: []
    };
  }

  fetchContributers() {
    axios.get('https://api.github.com/repos/ivanseed/gitstats/contributors')
      .then(response => {
        this.setState({ contributors: response.data })
      })
      .catch(err => {
        console.log('gota error :(')
      })
  }

  componentWillMount() {
    this.fetchContributers();
  }

  render(props, state) {
    return (
      <div className="footer">
        <ul>
          <li id="footer-title"><a href="https://github.com/ivanseed/gitstats"><span>Git<b>Stats</b></span></a></li>
          <li>
            <span>Special thanks to all contributors that made this project possible!</span>
            <span>
              {
                state.contributors.map((contributor, i) => (
                  <b className="contributor">
                    <a href={`https://github.com/${contributor.login}`}>{contributor.login}</a>
                    { i + 1 === state.contributors.length ? '' : ', ' /* don't render comma on final name */ }
                  </b>
                ))
              }
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
