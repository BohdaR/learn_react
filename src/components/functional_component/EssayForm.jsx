import React, {useState} from 'react';

const EssayForm = () => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        alert('Your assay was submitted: ' + value);
        e.preventDefault();
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>{value}</h1>
            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input type="submit" value="submit"/>
            <input type="reset" onClick={(e) => setValue('')}/>
        </form>
    );
};

export default EssayForm;
