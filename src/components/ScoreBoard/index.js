import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './ScoreBoard.css';
import './css-circular-prog-bar.css';

class ScoreBoard extends Component {
  componentDidMount() {
    this.handleAssertion();
  }

  handleAssertion = () => {
    const { questions, assertions } = this.props;
    const assertionRate = Math.round((assertions * 100) / questions);

    document.querySelector('.value-bar').style.transform = `rotate(${assertionRate * 3.6}deg)`;
    if (assertionRate > 50) document.querySelector('.progress-circle').classList.add('over50');
  };

  render() {
    const { questions, assertions, score } = this.props;

    return (
      <div className="ScoreBoard">
        <div data-testid="feedback-total-question" className="invisible">{assertions}</div>
        <section>
          <h2>Acertos</h2>
          <div className="progress-circle">
            <span>{`${assertions}/${questions}`}</span>
            <div className="left-half-clipper">
              <div className="first50-bar" />
              <div className="value-bar" />
            </div>
          </div>
        </section>
        <section>
          <h2>Pontuação</h2>
          <span data-testid="feedback-total-score" className="score">{score}</span>
        </section>
      </div>
    );
  }
}

ScoreBoard.propTypes = {
  score: Proptypes.number.isRequired,
  assertions: Proptypes.number.isRequired,
  questions: Proptypes.objectOf(Proptypes.string).isRequired,
};

export default ScoreBoard;
