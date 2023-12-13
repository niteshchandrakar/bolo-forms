import React from 'react';
import PropTypes from 'prop-types';



export default class QuestionBox extends React.Component {
  static propTypes = {
    onStart: PropTypes.func.isRequired,
    questionChange: PropTypes.func.isRequired,
  };
  render() {
    const { questionChange, onStart } = this.props;
    return (
      <div>
       
          <input placeholder='text' className='m-1 p-1 border-2 border-black-500' data-testid='question-input' onChange={questionChange} />
          <button className='text-white bg-green-900 rounded border-black m-0 p-1' onClick={onStart}>Start</button>
        
      </div>
    );
  }
}

