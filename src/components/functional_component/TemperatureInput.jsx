import React from 'react';

const TemperatureInput = (props) => {
    const scaleNames = {
        c: 'Цельсій',
        f: 'Фаренгейт'
    };
    const scale = props.scale

    return (
        <fieldset>
            <legend>Введіть температуру в градусах {scaleNames[scale]}:</legend>
            <input value={props.temperature}
                   onChange={(e) => props.onTemperatureChange(e.target.value)} />
        </fieldset>
    );
};

export default TemperatureInput;
