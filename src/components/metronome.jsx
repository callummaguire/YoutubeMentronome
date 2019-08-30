import React, { Component } from "react";
import "./metronome.css";
import click1 from "../click1.wav";
import click2 from "../click2.wav";

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };
  }
  handleBpmChange = event => {
    const bpm = event.target.value;

    if (this.state.playing) {
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

      this.setState({
        count: 0,
        bpm
      });
    } else {
      this.setState({ bpm });
    }
  };

  onStartMetronome = () => {
    if (this.state.playing) {
      clearInterval(this.timer);
      this.setState({ playing: false });
    } else {
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState(
        {
          count: 0,
          playing: true
        },
        this.playClick
      );
    }
  };
  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else if (count % beatsPerMeasure === 3) {
      console.log("Play video");
      this.click1.play();
    } else {
      this.click1.play();
    }
    console.log(count);
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };
  render() {
    const { playing, bpm } = this.state;
    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={this.handleBpmChange}
          />
        </div>
        <button onClick={this.onStartMetronome}>
          {playing ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

export default Metronome;
