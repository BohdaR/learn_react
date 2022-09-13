import React, {useState} from 'react';
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const BoilingCalculator = () => {
    const [state , setState] = useState({temperature: '', scale: 'C'})

    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const handleCelsiusChange = (temperature) => {
        setState({temperature, scale: 'c'});
    }

    const handleFahrenheitChange = (temperature) => {
        setState({temperature, scale: 'f'});
    }

    const scale = state.scale;
    const temperature = state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
    );
};

export default BoilingCalculator;
