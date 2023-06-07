import { useSelector } from "react-redux";

function AirlineList () {
    
    const airlineList = useSelector(store => store.airlineList)

    
    return (
        <tbody>
          {airlineList.map((airline, i) => (
            <tr key={i}>
              <td>{airline}</td>
            </tr>
          ))}
        </tbody>
    )
}

export default AirlineList;