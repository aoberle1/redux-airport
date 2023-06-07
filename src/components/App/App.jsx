import AirlineList from '../AirlineList/AirlineList';
import AirlineForm from '../AirlineForm/AirlineForm';

function App() {


  return (
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm />
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Airlines</th>
          </tr>
        </thead>
        <AirlineList />
      </table>
    </div>
  );
}

export default App;
