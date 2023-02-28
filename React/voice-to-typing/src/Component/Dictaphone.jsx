import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./Phone.css"

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='container'>
      <p className='status'>Microphone: {listening ? 'on' : 'off'}</p>
      <button id="start_btn" onClick={SpeechRecognition.startListening}>Start</button>
      <button id="stop_btn" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button id="reset_btn" onClick={resetTranscript}>Reset</button>
      <div className='answer'><p>{transcript}</p></div>
      
    </div>
  );
};
export default Dictaphone;