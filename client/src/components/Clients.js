import React, { useState } from "react";
import "../App.css";
import AddClient from "./client/AddClient";
import ListClient from "./client/ListClient";
import UpdateClient from "./client/UpdateClient";

function Clients() {
  const [item, setitem] = useState(1);
  const [clientId, setClientId] = useState();

    // useEffect(() => {
    //   console.log(clientId); // Log the updated value of clients whenever it changes
    // }, [clientId]);

  return (
    <div>
      <div class="component" id="users">
        <div class="head-title">
          <div class="left">
            <h1>clients</h1>
            <ul class="breadcrumb">
              <li
                onClick={() => {
                  setitem(1);
                }}
              >
                <a href="#" className={item === 1 ? "active" : ""}>
                  clients
                </a>
              </li>
              {(item === 2 || item === 3) && (
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
              )}
              {item === 2 && (
                <li>
                  <a class="active" href="#">
                    ajouter un client
                  </a>
                </li>
              )}
              {item === 3 && (
                <li>
                  <a class="active" href="#">
                    modifier un client
                  </a>
                </li>
              )}
            </ul>
          </div>
          {item === 1 && (
            <div class="right">
              <a
                href="#"
                class="btn-download"
                onClick={() => {
                  setitem(2);
                }}
              >
                <i class="bx bx-plus-circle"></i>
                <span class="text">ajouter client</span>
              </a>
            </div>
          )}
        </div>
        {/* content */}
        {item === 1 && <ListClient setitem={setitem} setClientId={setClientId}/>}
        {item === 2 && <AddClient setitem={setitem} />}
        {item === 3 && <UpdateClient setitem={setitem} clientId={clientId} />}
      </div>
    </div>
  );
}

export default Clients;
