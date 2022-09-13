import React, {useState} from 'react';

const FlavorForm = ({flavors}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        alert('A name was submitted: ' + value);
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Pick your favorite flavor: </label>
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {flavors.map((flavor) =>
                <option value={flavor}>{flavor}</option>)}
            </select>
            <input type="submit" value="pick"/>
        </form>
    );
};

export default FlavorForm;
