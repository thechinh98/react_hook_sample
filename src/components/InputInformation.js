import React,{useState, useEffect}from 'react';

function InputInformation(){
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [dob, setDob] = useState()

    useEffect(() => {
        document.tile = `${name}, ${age}, ${dob}`;
        console.log(`${name}, ${age}, ${dob}`)
    },[name, age, dob]);
    return (
        <div>
            <input value = {name} onChange = {event => setName(event.target.value)}/>
            <input value = {age} onChange = {event => setAge(event.target.value)}/>
            <input value = {dob} onChange = {event => setDob(event.target.value)}/>
            <p>Toi ten la {name}, {age} tuoi, sinh ngay {dob}</p>
        </div>
    );
}

export default InputInformation;