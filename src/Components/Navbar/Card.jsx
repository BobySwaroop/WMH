import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../firebase-config";
import "../../App.css";

const Card = (props) => {
  const firebase = useFirebase();

  const [url, setURL] = useState(null);
  useEffect(() => {
    firebase.getImageURL(props.url).then((url) => setURL(url));
  }, []);

  const handleDownloadClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    
    <div className="container bg-light w-75 main-contianer loadata mt-4">
      <div className="row">
        <div className="col-md-6">
          <img className="img-thumbnail m-3" src={url} />
        </div>
        <div className="col-md-6 userdata">
          <div className="">
            <p className="form-control m-2 deta">
              <b>Name: </b>
              {props.name}
            </p>
            <p className="form-control m-2 deta">
              <span>
                <b>Model:</b>{" "}
              </span>
              {props.model}
            </p>
            <p className="form-control m-2 deta">
              <span>
                <b>Credit:</b>{" "}
              </span>
              {props.credit}
            </p>
            <p className="form-control m-2 deta">
              <span>
                <b>Caption:</b>{" "}
              </span>
              {props.caption}
            </p>
            <Link path="#" className="btn btn-danger m-2 float-end">
              Delete
            </Link>
            <Link path="#" className="btn btn-success m-2 float-end">
              Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
