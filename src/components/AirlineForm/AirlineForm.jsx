import { useDispatch } from "react-redux";
import { useState } from "react";


function AirlineForm () {

    const dispatch = useDispatch();
    const [newAirline, setNewAirline] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
    
        dispatch({
          type: 'ADD_AIRLINE',
          payload: newAirline
        });
    
        setNewAirline('');
      }

    return (
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Airline Name' 
        onChange={event => setNewAirline(event.target.value)}
        value={newAirline}
        />
        <button type="submit">Add Airline</button>
      </form>
    )

}

export default AirlineForm;