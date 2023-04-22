import React, {useState} from "react";
import "./calc.css"

function AgeCalc() {
    const [birthDate, setBirthdate] = useState('');
    const [age, setAge] = useState('');

    const calculateAge = () => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        const ageInMilliSec = today - birthDateObj;
        const ageInYears = Math.floor(ageInMilliSec / (1000 * 60 * 60 * 24 * 365));
        setAge(ageInYears);
    };

    return (
        <div className="age-calculator">
            <h1>Age Calculator</h1>
            <input type="date" value={birthDate} onChange={(e) => setBirthdate(e.target.value)}
            />
            <button onClick={calculateAge}>Calculate Age</button>
            {age && <p>You are {age} years old.</p>}
        </div>
    )
}

export default AgeCalc;