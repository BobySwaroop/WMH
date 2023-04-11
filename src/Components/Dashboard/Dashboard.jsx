import React, { useState} from 'react';
import Navbar from '../Navbar/Navbar';
import { useFirebase } from '../firebase-config';
import { Link } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { CSVLink } from 'react-csv';



const headers = [
  {label: 'Name', key: 'name'},
  {label: 'Model', key: 'model'},
  {label: 'Credit', key: 'credit'},
  {label: 'Caption', key: 'caption'},
  {label: 'Url', key: 'url'},
]


function Dashboard() {
  const firebase = useFirebase();

  const [users, setUsers] = useState([]);
  const halndleload = (e) => {
    e.preventDefault();
    firebase.listAllUsers().then((users) => setUsers(users.docs));
  }

  const handleDeleteClick = (id) => {
    let deletedata = doc(db, "imageUploads" , id);
    deleteDoc(deletedata).then(() => {
      alert("delete");
      window.location.reload(false);
    })
  }

  return (
    <>
      <Navbar/>
      <div className='container bg-dark w-75 main-contianer'>
        <div className='row Pre p-5'>
          <div className='col-10 mx-auto'>
            <div className='row text-center'>
              <h1 className='text-danger'>Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container bg-light w-75 main-contianer'>
          <div className='row p-5'>
            <div className='col-10 mx-auto'>
              <div className='row w-50 mx-auto'>
                <div className='col-md-12'>
                  {/* Add a form with a select dropdown for filter options */}
                  <form>
                    <div className='form-group'>
                      <label htmlFor='filter'>Select filter:</label>
                      <select className='form-control' id='filter'>
                        <option value='today'>Today</option>
                        <option value='yesterday'>Yesterday</option>
                        <option value='last week'>Lastweek</option>
                        <option value='All'>All</option>

                      </select>
                    </div>
                    {/* Add button to trigger download */}
                    <button className='btn btn-danger m-2' onClick={halndleload}>
                    Load Images
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="card-group">
          {users.map((user) => (
        <div key={user.id}  className="container bg-light w-75 main-contianer loadata mt-4">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail m-3" src={user.data().url} />
          </div>
          <div className="col-md-6 userdata">
            <div className="">
              <p className="form-control m-2 deta">
                <b>Name: </b>
                {user.data().name}
              </p>
              <p className="form-control m-2 deta">
                <span>
                  <b>Model:</b>{" "}
                </span>
                {user.data().caption}
              </p>
              <p className="form-control m-2 deta">
                <span>
                  <b>Credit:</b>
                </span>
                {user.data().credit}
              </p>
              <p className="form-control m-2 deta">
                <span>
                  <b>Caption:</b>
                </span>
                {user.data().model}
              </p>
              <Link path="#" className="btn btn-danger m-2 float-end" onClick={() => handleDeleteClick(user.id)}>
                Delete
              </Link>
              <CSVLink data={users} headers={headers} filename='user_data.csv'>
              <button className="btn btn-success m-2 float-end" >
                Download
              </button>
              </CSVLink>
            </div>
          </div>
        </div>
      </div>
        ))}
      </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;