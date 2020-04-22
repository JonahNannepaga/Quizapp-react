import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";
class QuizQuestion extends Component {
  handleClick(button_text) {
    if (button_text === this.props.quiz_question.answer) {
      this.setState((state) => {
        return {
          incorrectAnswer: false,
        };
      });
      this.props.showNextQuestionHandler();
    } else {
      this.setState((state) => {
        return {
          incorrectAnswer: true,
        };
      });
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      incorrectAnswer: false,
    };
  }

  render() {
    return (
      <div>
        <main>
          <section>
            <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          {this.state.incorrectAnswer ? (
            <p className="error">
              Sorry, that's not right
              <br />
              Try Again!
            </p>
          ) : null}
          <section>
            <ul className="buttons">
              {this.props.quiz_question.answer_options.map(
                (answer_option, index) => {
                  return (
                    <QuizQuestionButton
                      key={index}
                      button_text={answer_option}
                      clickHandler={this.handleClick.bind(this)}
                    />
                  );
                }
              )}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestion;
