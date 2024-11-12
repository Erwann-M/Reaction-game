import { Component } from 'react';
import CustomButton from '../button/CustomButton';
import './styles.scss';

class Game extends Component {
  randomTime = () => {
    const randomNumber = Math.random() * 5 + 2
    return randomNumber.toFixed(2)
  }

  incrementState = () => {
    let currentNumber = this.state.playerTime
    currentNumber += 0.01

    this.setState({
      playerTime: currentNumber,
      buttonStatus: "stop"
    })
  }

  startCounter = () => {
    if(this.state.buttonStatus == "start") {
      this.intervalID = setInterval(this.incrementState, 10)
    }
  }

  calcResult = () => {
    if(this.state.playerTime == this.state.randomTime) {
      return "WOW t'es tombé tout pile !!! GG"
    } else if(this.state.playerTime < this.state.randomTime) {
      return "Tu es à " + String(Math.round((this.state.randomTime - this.state.playerTime) * 100) / 100) + " en dessous de l'objectif !"
    } else {
      return "Tu es à " + String(Math.round((this.state.playerTime - this.state.randomTime) * 100) / 100) + " au dessus de l'objectif !"
    }
  }

  stopCounter = () => {
    clearInterval(this.intervalID)
    this.setState({
      playerTime: this.state.playerTime,
      result: this.calcResult()
    })
  }

  state = {
    randomTime: this.randomTime(),
    playerTime: 0.00,
    buttonStatus: "start",
    result: ""
  }

  render() {
    return(
      <div className="game">
        <div className='game__container'>
          <div className='game__container--line'>
            <div className='game__container--second-line'>
              <p className='game__container__text'><span>Arrête toi</span> le plus proche du chiffre.</p>
              <p className='game__container__counters'>{this.state.randomTime}</p>
              <p className='game__container__counters'>{this.state.playerTime.toFixed(2)}</p>
              <button className='game__container__button' onClick={this.state.buttonStatus == "stop" ? this.stopCounter : this.startCounter}>{this.state.buttonStatus}</button>
              <p className='game__container__text'>{this.state.result}</p>
              <CustomButton action={() => window.location.reload()} text="Recommencer" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;
