import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
      isDarkMode: true,
    };
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.timer = setInterval(() => {
        this.setState((prevState) => {
          const newTime = prevState.time + 1;
          if (newTime >= 1500) { // Stop at 25 minutes
            clearInterval(this.timer);
            return {
              time: 1500,
              isRunning: false,
            };
          }
          return {
            time: newTime,
          };
        });
      }, 1000);
  
      this.setState({ isRunning: true });
    }
  };
  

  pauseTimer = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({ time: 0, isRunning: false });
  };

  toggleMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  render() {
    const { time, isRunning, isDarkMode } = this.state;
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode';

    const formattedTime = this.formatTime(time);

    return (
      <div className={`timer ${modeClass}`}>
        <h2>{formattedTime}</h2>
        <div className="buttons">
          <button onClick={this.startTimer} disabled={isRunning}>
            Start
          </button>
          <button onClick={this.pauseTimer} disabled={!isRunning}>
            Pause
          </button>
          <button onClick={this.resetTimer}>Reset</button>
          <button onClick={this.toggleMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
