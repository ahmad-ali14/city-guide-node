import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';

const server_url = "http://localhost:5000";

function App() {
  const [isVisible, setIsVisible] = useState({
    pharmacies: false,
    highSchools: false,
    colleges: false,
    hospitals: false,
    Gps: false

  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [err, setErr] = useState(false);

  // useEffect(() => { grapPharmacies(); }, [])


  const grapPharmacies = async () => {
    if (city === '') { setErr(true); return; }
    setErr(false);
    await setLoading(true);
    axios.get(server_url + `/${city}/pharmacies`, {
      city: city
    }).then((res) => {
      setData(res.data)
    }).then(() => setLoading(false))
  }

  const grapColleges = async () => {
    if (city === '') { setErr(true); return; }
    setErr(false);
    await setLoading(true);
    axios.get(server_url + `/${city}/colleges`).then((res) => {
      setData(res.data)
    }).then(() => setLoading(false))
  }

  const grapHospitals = async () => {
    if (city === '') { setErr(true); return; }
    setErr(false);
    await setLoading(true);
    axios.get(server_url + `/${city}/hospitals`).then((res) => {
      setData(res.data)
    }).then(() => setLoading(false))
  }

  const grapDoctors = async () => {
    if (city === '') { setErr(true); return; }
    setErr(false);
    await setLoading(true);
    axios.get(server_url + `/${city}/doctors`).then((res) => {
      setData(res.data)
    }).then(() => setLoading(false))
  }




  const handleTabClick = (e) => {
    let updateTab = e.target.value;

    switch (updateTab) {
      case 'pharmacies':
        setIsVisible({
          pharmacies: true,
          highSchools: false,
          colleges: false,
          hospitals: false,
          Gps: false
        })

        break;

      case 'highSchools':
        setIsVisible({
          pharmacies: false,
          highSchools: true,
          colleges: false,
          hospitals: false,
          Gps: false
        })
        break;

      case 'colleges':
        setIsVisible({
          pharmacies: false,
          highSchools: false,
          colleges: true,
          hospitals: false,
          Gps: false
        })
        break;

      case 'hospitals':
        setIsVisible({
          pharmacies: false,
          highSchools: false,
          colleges: false,
          hospitals: true,
          Gps: false
        })
        break;

      case 'Gps':
        setIsVisible({
          pharmacies: false,
          highSchools: false,
          colleges: false,
          hospitals: false,
          Gps: true
        })
        break;

      default:
        break;
    }


  }
  return (
    <div className="container">
      <h1 className="text-center pt-5 pb-5" >City Mini Guide</h1>

      <hr />
      <span>choose a city:</span>{' '}{' '} {' '}{' '} {' '}{' '}
      <select style={{ display: 'inline' }} id="citySelector" autoFocus="-1" value={city} onChange={(e) => { console.log('e value', e.target.value); setCity(e.target.value); }}>
        <option id="defaultcitySelection" value="no-city" defaultValue='' >select a city </option>
        <option value='Harrow'>Harrow</option>
        <option value="stratford%2C+east+london" >Stratford</option>
        <option value='heathrow'>Heathrow</option>
      </select>

      {
        err && <><hr className="mt-2 mb-2" /><div className="alert-danger" ><h5>check out your request, a city and category must be chosen, No default values are provided</h5></div></>
      }
      <hr />
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <button className={isVisible.pharmacies ? "nav-link active" : "nav-link"} onClick={(e) => { grapPharmacies(); handleTabClick(e) }} value="pharmacies" >Pharmacies</button>
        </li>
        {/* <li className="nav-item">
          <button className={isVisible.highSchools ? "nav-link active" : "nav-link"} onClick={(e) => { handleTabClick(e) }} value="highSchools" >high schools</button>
        </li> */}
        <li className="nav-item">
          <button className={isVisible.colleges ? "nav-link active" : "nav-link"} onClick={(e) => { grapColleges(); handleTabClick(e) }} value="colleges" > schools & colleges</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.hospitals ? "nav-link active" : "nav-link"} onClick={(e) => { grapHospitals(); handleTabClick(e) }} value="hospitals" >hospitals</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.Gps ? "nav-link active" : "nav-link"} onClick={(e) => { grapDoctors(); handleTabClick(e) }} value="Gps" >doctors</button>
        </li>
      </ul>



      {/* <hr />
      <div>
        <span>show: {' '} {' '} {' '} {' '}</span>
        <div style={{ display: 'inline' }} class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="defaultChecked2" checked />
          <label class="custom-control-label" for="defaultChecked2">Default checked</label>
        </div>
      </div> */}
      <br className="mb-5" />

      {loading ? (
        <div className="text-center" style={{ marginLeft: '40%' }} >
          <ReactLoading type='bars' color='blue' height={'20%'} width={'20%'} />
        </div>
      ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" style={{ width: '10%' }}>#</th>
                <th scope="col" style={{ width: '25%' }}>Name</th>
                <th scope="col" style={{ width: '20%' }}>Phone</th>
                <th scope="col" style={{ width: '20%' }}>Address</th>
                <th scope="col" style={{ width: '25%' }}>website</th>

              </tr>
            </thead>
            <tbody>
              {(data && data.length > 0) ? data.map((place, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{place.name ? place.name : 'N/A'}</td>
                    <td>{place.phone ? place.phone : 'N/A'}</td>
                    <td>{place.address ? place.address : 'N/A'}</td>
                    <td>{place.website ? <a href={place.website} target="_blank" >{place.name}</a> : 'N/A'}</td>
                  </tr>
                );
              }) : (
                  <tr><td colSpan='5' ><h3 className="text-center"> choose a city and category first </h3></td></tr>
                )
              }

            </tbody>
          </table>
        )}




    </div>
  );
}

export default App;
