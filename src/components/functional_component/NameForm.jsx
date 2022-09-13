import React, {useState} from 'react';

const NameForm = () => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        alert('A name was submitted: ' + value);
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input type="reset" onClick={(e) => setValue('')}/>
        </form>
    );
};

export default NameForm;