import React, {useState} from 'react';
import axios from 'axios';

const DataSubmission = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = () => {
        //creates a Person object
        const newPerson = {name: name, age: age, year: year};

        //newperson is the data we are sending to the API
        axios.post('https://api.example.com/submit', newPerson)
        .then((response) => {
            console.log("Data submitted successfully: ", response.data);

            //update Data Set with new person
            setData(prevData => [...prevData, response.data]);
            
            //clears input fields
            setName('');
            setAge('');
            setYear('');
        })
        //error handling for API call
        .catch((error) => {
            console.error('Error submitting data: ', error);
        });
    }; 

    return (
        <div>
            <h1>Data Submission</h1>
            <h3>Enter your name</h3>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <h3>Enter your age</h3>
            <input
                value={age}
                onChange={e => setAge(e.target.value)}
            />
            <br />
            <h3>Enter your year</h3>
            <input
                value={year}
                onChange={e => setYear(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {data.map((person, index) => ( 
                    <li key={index}>
                        <strong>Name:</strong> {person.name}<br />
                        <strong>Age:</strong> {person.age}<br />
                        <strong>Year:</strong> {person.year}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default DataSubmission;