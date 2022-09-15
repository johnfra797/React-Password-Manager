import React, { useState,useEffect } from "react";
import "./style.css";

function Card({ ID, URL, NAME, USERNAME, PASSWORD,UPDATE,DELETE}) {
  const cardClass = `card twitter`;
  const [show, setShow] = useState(false);
  const [url, setURL] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const updateCard = () => {
    UPDATE(ID,{'URL':url,'NAME':NAME,'USERNAME':username,'PASSWORD':password})
  };
  const showEvent = () => {
    setShow(!show);
  };
  useEffect(() => {
   setURL(URL);
   setUsername(USERNAME);
   setPassword(PASSWORD);
  }, []);
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src="images/link.png" alt="" />
        {NAME}
      </p>
      <div className="input-group input-group-sm mb-3">
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
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputUsername">
            Username
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
          {!show && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => showEvent()}
            >
              Show
            </button>
          )}
          {show && (
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => showEvent()}
              >
                Hidden
              </button>
            </div>
          )}
        </div>
        {!show && (
          <input
            type="text"
            value="********"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputPassword"
            disabled
          />
        )}
        {show && (
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="inputPassword"
            value={password}
            onChange={e => setPassword(e.target.value)} 
            
          />
        )}
      </div>
      <button type="button" className="btn btn-outline-warning" 
              onClick={() => updateCard()}>
        Update
      </button>
      <button type="button" className="btn btn-outline-danger" 
              onClick={() => DELETE(ID)}>
        Delete
      </button>

      <a href={URL} type="button" className="btn btn-outline-secondary btn-sm">
        Go
      </a>
    </article>
  );
}

export default Card;
