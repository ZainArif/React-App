import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let city = {
  name : "Karachi",
  country : "Pakistan"
};


function Hello(props){
  return(
    <div>
      <h1>Hello!</h1>
      <p>{props.cityname}</p>
    </div>
  );
}

function Hello1({cityname}){
  return(
    <div>
      <h1>Hello1!</h1>
      <p>{cityname}</p>
    </div>
  );
}

function Hello2(){
  return(
    <div>
      <Hello cityname="Karachi" />
      <Hello1 cityname="Lahore" />
    </div>
  );
}

const citylist = [
  "Karachi",
  "Lahore",
  "Islamabad"
];


function City({cities}){
  return(
    <ul>
      {cities.map(city => (<li>{city}</li>))}
    </ul>
  );
}
ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,

  //React.createElement("h1",{style:{color:"red"}},"Hello"),

  /*<ul>
    <li>Zain</li>
    <li>Anas</li>
    <li>Rehan</li>
    <li>Muddabir</li>
    <li>Yousuf</li>
    <li>Mohsin</li>
  </ul>,*/

  /*<h1 id="heading" className="cool-text">
    {city.name} is in {city.country}
  </h1>,*/
  //<Hello cityname="Karachi"/>,
  //<Hello1 cityname="Karachi"/>,
  //<Hello2 />,
  <City cities={citylist} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
