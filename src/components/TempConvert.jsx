import { useState } from 'react';

export function TempConvert() {
  const [temperature, setTemperature] = useState('');
  const [fromUnit, setFromUnit] = useState('C');
  const [toUnit, setToUnit] = useState('C');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    // Perform the temperature conversion
    const convertedTemperature = convertTemperature(parseFloat(temperature), fromUnit, toUnit);

    // Update the result
    setResult('Result: ' + `${convertedTemperature.toFixed(2)} ${toUnit}`);
  };

  const convertTemperature = (temp, from, to) => {
    if (from === to) {
      return temp;
    }

    // Convert the temperature based on the units
    let convertedTemp;

    if (from === 'C') {
      if (to === 'F') {
        convertedTemp = (temp * 9) / 5 + 32;
      } else if (to === 'R') {
        convertedTemp = temp * 0.8;
      } else if (to === 'K') {
        convertedTemp = temp + 273.15;
      }
    } else if (from === 'F') {
      if (to === 'C') {
        convertedTemp = ((temp - 32) * 5) / 9;
      } else if (to === 'R') {
        convertedTemp = ((temp - 32) * 4) / 9;
      } else if (to === 'K') {
        convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
      }
    } else if (from === 'R') {
      if (to === 'C') {
        convertedTemp = temp * 1.25;
      } else if (to === 'F') {
        convertedTemp = (temp * 9) / 4 + 32;
      } else if (to === 'K') {
        convertedTemp = (temp * 5) / 4 + 273.15;
      }
    } else if (from === 'K') {
      if (to === 'C') {
        convertedTemp = temp - 273.15;
      } else if (to === 'F') {
        convertedTemp = ((temp - 273.15) * 9) / 5 + 32;
      } else if (to === 'R') {
        convertedTemp = ((temp - 273.15) * 4) / 5;
      }
    }

    return convertedTemp;
  };

  return (
    <form className="bg-white p-6 rounded shadow-lg" onSubmit={handleClick}>
      <h1 className="text-2xl font-bold mb-4">Temperature Converter</h1>
      <div className="mb-4">
        <label htmlFor="temperature" className="block mb-2">
          Temperature:
        </label>
        <input type="number" id="temperature" className="w-full px-4 py-2 border rounded" placeholder="Enter temperature" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
      </div>
      <div className="mb-4">
        <label htmlFor="from" className="block mb-2">
          From:
        </label>
        <select id="from" className="w-full px-4 py-2 border rounded" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="C">Celsius (C)</option>
          <option value="R">Reaumur (R)</option>
          <option value="K">Kelvin (K)</option>
          <option value="F">Fahrenheit (F)</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="to" className="block mb-2">
          To:
        </label>
        <select id="to" className="w-full px-4 py-2 border rounded" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="C">Celsius (C)</option>
          <option value="R">Reaumur (R)</option>
          <option value="K">Kelvin (K)</option>
          <option value="F">Fahrenheit (F)</option>
        </select>
      </div>
      <button id="convert" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Convert
      </button>
      <div id="result" className="mt-4 font-bold">
        {result}
      </div>
    </form>
  );
}
