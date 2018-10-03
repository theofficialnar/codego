import React from "react";
import { NavLink } from "react-router-dom";

import CodeBlock from "../Components/CodeBlock";
import questions from "../api/questions";

class Questionnaire extends React.Component {
  state = {
    question: null,
    correct_answer: null,
    user_answer: null
  };

  handleAnswer = answer => {
    this.setState({ user_answer: answer });
  };

  componentDidMount = () => {
    const { question_id } = this.props.match.params;
    let questionNumber = new Number(question_id).valueOf();
    let question = questions.find(item => item.id === questionNumber);
    if (question) {
      this.setState({
        question: question.question,
        correct_answer: question.answer
      });
    }
  };

  componentDidUpdate(prevProps) {
    const { question_id } = this.props.match.params;
    if (question_id !== prevProps.match.params.question_id) {
      let question = questions.find(
        item => item.id === new Number(question_id).valueOf()
      );
      if (question) {
        this.setState({
          question: question.question,
          correct_answer: question.answer
        });
      }
    }
  }

  render() {
    const { question, correct_answer, user_answer } = this.state;
    const currentQuestion = new Number(this.props.match.params.question_id);
    const validateAnswer = user_answer
      ? user_answer === correct_answer
        ? "Correct"
        : "Incorrect"
      : "Click RUN to test your answer.";
    return (
      <React.Fragment>
        <div className="questionnaire_container">
          <h1 className="questionnaire_question">Question: {question}</h1>
        </div>
        <div className="questionnaire_codeblock">
          <CodeBlock submitAnswer={this.handleAnswer} />
        </div>
        <div>
          <h2>{validateAnswer}</h2>
          <h2>Your Answer: {user_answer}</h2>
        </div>
        <div className="btn_container">
          <NavLink
            to={`/question/${currentQuestion - 1}`}
            className="btn btn-back"
          >
            Back
          </NavLink>
          <NavLink
            to={`/question/${currentQuestion + 1}`}
            className="btn btn-next"
          >
            Next
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Questionnaire;
