import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Dashboard.css";
import { useFirebase } from '../firebase-config';
import { Link } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { CSVLink } from 'react-csv';
import ReactPaginate from 'react-paginate';



function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const firebase = useFirebase();
  const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
    e.preventDefault();
    firebase.listAllUsers().then((users) => {
      const filteredUsers = users.docs.filter((user) => {
        return user.data().name.toLowerCase().includes(searchTerm.toLowerCase()) || user.data().email.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setUsers(filteredUsers);
    });
  }

  const [users, setUsers] = useState([]);
  // const halndleload = (e) => {
  //   e.preventDefault();
  //   firebase.listAllUsers().then((users) => setUsers(users.docs));
  // }

  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 4;

  const handleDeleteClick = (id,e) => {
    let deletedata = doc(db, "imageUploads", id);
    deleteDoc(deletedata).then(() => {
      window.location.reload(false);
    })
  }
  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Model', key: 'model' },
    { label: 'Credit', key: 'credit' },
    { label: 'Caption', key: 'caption' },
    { label: 'Url', key: 'url' },

  ]
  const filteredUsers = users.filter((user) => {
    if (selectedFilter === 'All') {
      return true;
    } else if (selectedFilter === 'last week') {
      // Filter by date (example)
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      const imageDate = new Date(user.data().createdAt);
      return imageDate > lastWeek;
    }
  });

  const offset = currentPage * usersPerPage;
  const currentUsers = filteredUsers.slice(offset, offset + usersPerPage);

  return (
    <>
      <Navbar />
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
                <div className='col-md-12 d-linline'>
                  <form>
                    <div className='form-group'>
                    <input type="text" className='form-control' placeholder="Search by name or email" onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className='btn btn-danger mt-2' onClick={handleSearch}>
                      Search
                    </button>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="card-group">
            {currentUsers.map((user) => (
              <div key={user.id} className="container bg-light w-75 main-contianer loadata mt-4">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className='card-image-container'>
                      <img className="img-thumbnail  card-image" src={user.data().url} alt='image-url' />
                    </div>
                  </div>
                  <div className="col-md-6 userdata">
                    <div className="">
                      <p className="form-control mb-1 deta">
                        <b>Name: </b>
                        {user.data().name}
                      </p>
                      <p className="form-control mb-1 deta">
                        <b>Email: </b>
                        {user.data().email}
                      </p>
                      <p className="form-control  mb-1 deta">
                        <span>
                          <b>Model: </b>{" "}
                        </span>
                        {user.data().caption}
                      </p>
                      <p className="form-control mb-1 deta">
                        <span>
                          <b>Credit: </b>
                        </span>
                        {user.data().credit}
                      </p>
                      <p className="form-control mb-1 deta">
                        <span>
                          <b>Caption: </b>
                        </span>
                        {user.data().model}
                      </p>
                      <Link path="#" className="btn btn-danger m-2 float-end" onClick={() => handleDeleteClick(user.id)}>
                        Delete
                      </Link>
                      <CSVLink data={filteredUsers.map(user => ({
                        
                        name: user.data().name,
                        email: user.data().email,
                        model: user.data().model,
                        credit: user.data().credit,
                        caption: user.data().caption,
                        url: user.data().url
                      }))} headers={headers} filename='user_data.csv'>
                        <button className="btn btn-success m-2 float-end">Download</button>
                      </CSVLink>
                    </div>
                  </div>

                </div>
              </div>
           
            ))}
          </div>
          <ReactPaginate
            previousLabel={<i className="bi bi-arrow-left-circle-fill m-2"></i>}
            nextLabel={<i className="bi bi-arrow-right-circle-fill m-2"></i>}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(filteredUsers.length / usersPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(data) => setCurrentPage(data.selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
            previousClassName={'paginate-prev'}
            nextClassName={'paginate-next'}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;





