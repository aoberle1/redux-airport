import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  const [newAirline, setNewAirline] = useState('');
  const airlineList = useSelector(store => store.airlineList)


  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_AIRLINE',
      payload: newAirline
    });

    setNewAirline('');
  }


  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Airline Name' 
        onChange={event => setNewAirline(event.target.value)}
        value={newAirline}
        />
        <button type="submit">Add Airline</button>
      </form>
      <br></br>
      <table>{/* Airlines should be listed here */}
        <thead>
          <tr>
            <th>Airlines</th>
          </tr>
        </thead>
        <tbody>
          {airlineList.map((airline, i) => (
            <tr key={i}>
              <td>{airline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
