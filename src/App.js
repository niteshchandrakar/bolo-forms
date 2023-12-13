import React from 'react';

import QuestionBox from './QuestionBox';
import SentenceBox from './SentenceBox';
import AnswerBox from './AnswerBox';
import Results from './Results';
import { getSentence, getAnswers } from './TextConverter';

import { AppContainer, PrimaryButton } from './styled';



const text = 'The <brown> fox <jumped> over the <dog>';

class App extends React.Component {
  state = {
    showResults: false,
    question: '',
    answers: getAnswers(text),
    sentence: getSentence(text),
  };

  onDrop(ev, dropId) {
    const text = ev.dataTransfer.getData('text/plain');
    // ev.target.textContent = id;

    const sentence = this.state.sentence.map(w => {
      if (w.id === dropId) {
        return { ...w, placed: true, displayed: text};
      }
      return w;
    });
    this.setState({ sentence });
  }
  onStart() {
    this.setState({
      question: '',
      answers: getAnswers(this.state.question),
      sentence: getSentence(this.state.question),
    });
  }
  questionChange(e) {
    this.setState({question: e.target.value});
  }

  test = () => {
    this.setState({ showResults: !this.state.showResults });
  };

  render() {
    const { showResults } = this.state;
    return (
      <div className='flex flex-col items-center'>
        <h2 className='header'>Word Game</h2>
        <QuestionBox
          onStart={this.onStart.bind(this)}
          questionChange={this.questionChange.bind(this)}
        />
        <div>
          <button className='text-white bg-green-900 rounded border-black m-0 p-1' onClick={this.test}>Test</button>
        </div>
        <SentenceBox
          marked={showResults}
          onDrop={this.onDrop.bind(this)}
          sentence={this.state.sentence}
        />
        <AnswerBox answers={this.state.answers} />
        
      </div>
    );
  }
}

export default App;
