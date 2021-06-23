import React, { Component } from 'react';
// let timer = 0

class StopWatch extends Component {
    state = {
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        isOn: false,
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        if (this.state.milliseconds === 100) {
            this.setState({ milliseconds: 0, seconds: this.state.seconds + 1 })
        }
        if (this.state.seconds === 60) {
            this.setState({ seconds: 0, minutes: this.state.minutes + 1 })
        }
    }

    handleStart = () => {
        this.timer = setInterval(() => this.setState({
            milliseconds: this.state.milliseconds + 1,
            isOn: true,

        }), 1);
    }
    handleStop = () => {
        clearInterval(this.timer)
        this.setState({
            isOn: false
        });
    }
    handleResume = () => {
        this.handleStart()
    }
    handleReset = () => {
        this.setState({
            milliseconds: 0,
            seconds: 0,
            minutes: 0,
            isOn: false,
            isShown: false
        })
    }
    render() {
        return (
            <section>
                <div className="time">
                    <div>{this.state.minutes}</div><span>:</span>
                    <div>{this.state.seconds}</div>
                    <span>:</span><div>{this.state.milliseconds}</div>
                </div>
                <div className="btn">
                    <div>
                        <button onClick={this.handleStart}>START</button>
                    </div>
                    <div>
                        <button className={this.state.isShown ? "show" : "hide"} onClick={this.state.isOn ? this.handleStop : this.handleResume}>{this.state.isOn ? "STOP" : "RESUME"}</button>

                        <button onClick={this.handleReset}>RESET</button>
                    </div>
                </div>
            </section >
        );
    }
}

export default StopWatch;