import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [isVisible, setIsVisible] = useState({
    pharmacies: true,
    highSchools: false,
    colleges: false,
    hospitals: false,
    Gps: false

  });


  const grapPharmacies = () => {
    console.log('hitted');

    axios.get('http://localhost:5000/pharmacies').then((res) => {
      console.log('here', res.data);

    })
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
          <button className={isVisible.colleges ? "nav-link active" : "nav-link"} onClick={(e) => { handleTabClick(e) }} value="colleges" >colleges</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.hospitals ? "nav-link active" : "nav-link"} onClick={(e) => { handleTabClick(e) }} value="hospitals" >hospitals</button>
        </li>
        <li className="nav-item">
          <button className={isVisible.Gps ? "nav-link active" : "nav-link"} onClick={(e) => { handleTabClick(e) }} value="Gps" >Gps</button>
        </li>
      </ul>

      <hr className="mb-5" />

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>


    </div>
  );
}

export default App;
