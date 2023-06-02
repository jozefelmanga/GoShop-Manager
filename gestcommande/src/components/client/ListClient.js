import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ListClient(props) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    loadclients();
  }, []);

  const loadclients = () => {
    axios
      .get("http://localhost:8080/client/clients", {})
      .then((result) => {
        setClients(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  function deleteClient(id) {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer ce client ?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "confirmer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/client/deleteclient?id=${id}`)
          .then(() => {
            Swal.fire("supprimé", "le client a été supprimer", "success");
            loadclients();
          })
          .catch((error) => {
            Swal.fire("désolé", "il y une erreur dans la requête", "error");
          });
      }
    });
  }

  //   useEffect(() => {
  //     console.log(clients); // Log the updated value of clients whenever it changes
  //   }, [clients]);
  return (
    <div>
      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>liste des clients</h3>
            <i class="bx bx-search"></i>
            <i class="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>nom</th>
                <th>pernom</th>
                <th>adresse</th>
                <th>telephone</th>
                <th style={{ width: "10%" }}>actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <p>{client.nom}</p>
                    </td>
                    <td>
                      <p>{client.prenom}</p>
                    </td>
                    <td>{client.adresse}</td>
                    <td>
                      <span>{client.telephone}</span>
                    </td>
                    <td>
                      <i
                        class="bx bxs-show bx-xs"
                        onClick={() => {
                          props.setClientId(client.id);
                          //   props.setitem(3);
                        }}
                      ></i>
                      <i
                        class="bx bxs-edit-alt bx-xs"
                        onClick={() => {
                          props.setClientId(client.id);
                          props.setitem(3);
                        }}
                      ></i>
                      <i class="bx bxs-x-circle bx-xs"onClick={() => {
                          deleteClient(client.id);
                        }}></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListClient;
