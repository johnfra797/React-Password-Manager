import React, { useState } from "react";
import "./style.css";

function CreateCard({create}) {
  const [name, setName] = useState('');
  const [url, setURL] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const createNewCard = () =>{
    create({'URL':url,'NAME':name,'USERNAME':username,'PASSWORD':password});
    setName('');
    setURL('');
    setUsername('');
    setPassword('');
  }
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Create new Card</h5>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputName">
              Name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
              aria-describedby="inputName"
              value={name}
              onChange={e => setName(e.target.value)} 
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputURL">
                URL
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="URL"
              aria-label="URL"
              aria-describedby="inputURL"
              value={url}
              onChange={e => setURL(e.target.value)} 
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputUsername">
                User
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="inputUsername"
              value={username}
              onChange={e => setUsername(e.target.value)} 
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputPassword">
                Password
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="inputPassword"
              value={password}
              onChange={e => setPassword(e.target.value)} 
            />
          </div>
          <button
                type="button"
                className="btn btn-outline-success btn-sm"
                onClick={() => createNewCard()}
              >
                Create
              </button>
        </div>
      </div>
    </>
  );
}

export default CreateCard;
