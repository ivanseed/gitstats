import { Component } from 'preact';
import '../style/progress.css';

export default class Progress extends Component {

  state = {
    width: 0,
    maxWidth: window.innerWidth
  };

  // Function that loads the bar in intervals
  growBar = () => {
    const growSize = 100;

    // Don't complete the loading bar until we are actually complete
    if (this.state.width + growSize < this.state.maxWidth) {
      this.setState({
        width: this.state.width + growSize
      });
    } else {
      clearInterval(this.updateInterval);
    }
  }

  resetProgressSize = () => {
    this.setState({ width: 0 });
  }

  startAnimation = () => {
    this.updateInterval = setInterval(this.growBar, 400);
  }

  stopAnimation = () => {
    clearInterval(this.updateInterval);
    this.updateInterval = false;
    setTimeout(this.resetProgressSize, 300);
  }

  updateWindowDimensions = () => {
    this.setState({ maxWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    setInterval(this.growBar, 400);
  }

  componentDidUpdate() {
    if (this.props.status === 'end') {
      this.stopAnimation();
    } else if (this.props.status === 'start' && !this.updateInterval) {
      this.startAnimation();
    }
  }

  render() {
    return (
      <div ref={e => { this.elm = e; }}
        className={'progress__' + this.props.status + ' progress'}
        style={{ width: this.state.width }}
      >
        <div className='progress--glow'></div>
      </div>
    );
  }
}
