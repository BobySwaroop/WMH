import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../firebase-config";
import '../Navbar/Navbar.css';


const Card = (props) => {

    const firebase = useFirebase();
  
    const [url, setURL] = useState(null);
    useEffect(() => {
        firebase.getImageURL(props.url).then((url) => setURL(url));
      }, []);
    
  return (
    <div className="card">
    <img src={url} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title"><span>Name: </span>{props.name}</h5>
      <p className="card-text"><span><b>Model:</b> </span>{props.model}</p>
      <p className="card-text"><span><b>Credit:</b> </span>{props.credit}</p>
      <p className="card-text"><span><b>Caption:</b> </span>{props.caption}</p>
      <Link path="#" className="btn btn-primary">Download</Link>
    </div>
  </div>
  );
}

export default Card;