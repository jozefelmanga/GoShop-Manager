import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function AddClient(props) {
  const [client, setClient] = useState([
    {
      nom: "",
      prenom: "",
      telephone: null,
      adresse: "",
    },
  ]);

  const { nom, prenom, telephone, adresse } = client;
  const onInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:8080/client/addclient", client)
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Ajout effectuée avec succès'
        })
        props.setitem(1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
  return (
    <div>
      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>ajouter client</h3>
          </div>

          <form id="users-form">
            <div class="form-input">
              nom:
              <input
                type="text"
                id="nom"
                name="nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="form-input">
              prenom:
              <input
                type="email"
                id="prenom"
                name="prenom"
                value={prenom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="form-input">
              adresse:
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={adresse}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="form-input">
              telephone:
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={telephone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </form>
          <div class="right">
            <a
              href="#"
              class="btn-download"
              onClick={() => {
                onSubmit();
              }}
            >
              <span class="text">ajouter client</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClient;
