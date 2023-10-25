// import logo from '../../logo.svg';
import './App.css';
import { useState } from 'react'; //import useState hook

//import Intro component
import Intro from '../Intro';

import DataInfo from '../DataInfo';

import DataSubmission from '../DataSubmission';

function App() { //when called it returns everything in the return statement (so when it is rendered)
  /*
    Creates a React element but in a different way: JSX
  */

  // const Intro = (props) => (
  //   <p>
  //     Our first functional component
  //   </p>
  // )


  //create State object
  // const [state, setState] = useState({}); //useState is a hook
  //setState is a function that updates the state object
  //state is the current state of the object
  const [topics, setTopics] = useState([]);
  //useState is a hook that lets you add state to functional components

 //individual topic that is used for topics array
  const [topic, setTopic] = useState('');

  const message = "Here, we can learn more about the topics.";

  //lets you add the value and make changes!
  const handleAddTopic = () => {
    setTopics(prevTopics => [...prevTopics, topic]);
    setTopic('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Workshop #1</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      
      {/* pass in all the props listed! */}
      {/* <Intro
        message={message}
        topic={topic}
        setTopic={setTopic}
        topics={topics}
        handleAddTopic={handleAddTopic}
      />
      The topics array - {topics.toString()} */}
      <DataSubmission />
      <DataInfo />
    </div>
  );
}

export default App;
