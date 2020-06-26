import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';


function App() {
  const [isVisible, setIsVisible] = useState({
    pharmacies: true,
    highSchools: false,
    colleges: false,
    hospitals: false,
    Gps: false

  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { grapPharmacies(); }, [])


  const grapPharmacies = async () => {
    await setLoading(true);
    axios.get('http://localhost:5000/pharmacies').then((res) => {
      setData(res.data)
    }).then(() => setLoading(false))
  }

  const grapColleges = async () => {
    await setLoading(true);
    axios.get('http://localhost:5000/colleges').then((res) => {
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
      <h1 className="text-center pt-5 pb-5" >Harrow Mini Guide</h1>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <button className={isVisible.pharmacies ? "nav-link active" : "nav-link"} onClick={(e) => { grapPharmacies(); handleTabClick(e) }} value="pharmacies" >Pharmacies</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.highSchools ? "nav-link active" : "nav-link"} onClick={(e) => { handleTabClick(e) }} value="highSchools" >high schools</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.colleges ? "nav-link active" : "nav-link"} onClick={(e) => { grapColleges(); handleTabClick(e) }} value="colleges" >colleges</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.hospitals ? "nav-link active" : "nav-link"} onClick={(e) => { handleTabClick(e) }} value="hospitals" >hospitals</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.Gps ? "nav-link active" : "nav-link"} onClick={(e) => { handleTabClick(e) }} value="Gps" >Gps</button>
        </li>
      </ul>

      <hr className="mb-5" />

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
              {data && data.length > 0 && data.map((place, i) => {
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{place.name ? place.name : 'N/A'}</td>
                    <td>{place.phone ? place.phone : 'N/A'}</td>
                    <td>{place.address ? place.address : 'N/A'}</td>
                    <td>{place.website ? place.website : 'N/A'}</td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        )}




    </div>
  );
}

export default App;
