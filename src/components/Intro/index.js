import React from 'react';


// const Intro = (props) => (
//     <p>
//       {/* Our first functional component */}
//       {props.message} {/* this makes it reusable*/}
//     </p>

    
// );

function Intro(props) {
    return (
        <div>
            <p>
                {props.message}
            </p>

            {/* makes a text field and names the value. onChange handles user interaction. We are changing the topic to whatever is the input. */}
            <input
                value={props.topic}
                onChange={e => props.setTopic(e.target.value)}
            />
            {/* onClick handles user interaction. We are callign handleAddTopic to add the topic to the topics array! */}
            <button onClick={props.handleAddTopic}>Add</button>
        </div>
        
    );
}

export default Intro;