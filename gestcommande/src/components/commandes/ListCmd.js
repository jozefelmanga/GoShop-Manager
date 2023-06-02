import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ListCmd(props) {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    loadcommandes();
  }, []);

  const loadcommandes = () => {
    axios
      .get("http://localhost:8080/commande/commandes", {})
      .then((result) => {
        console.log(result.data);

        setCommandes(
          result.data.map((val) => {
            let dateCmd = new Date(val.dateCmd);
            val.dateCmd = dateCmd.toLocaleDateString();
            return val;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function deleteCommande(id) {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer cet commande ?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "confirmer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/commande/deletecommande?id=${id}`)
          .then(() => {
            Swal.fire("supprimé", "la commande a été supprimer", "success");
            loadcommandes();
          })
          .catch((error) => {
            Swal.fire("désolé", "il y une erreur dans la requête", "error");
          });
      }
    });
  }

  //   useEffect(() => {
  //     console.log(commandes); // Log the updated value of commandes whenever it changes
  //   }, [commandes]);
  return (
    <div>
      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>liste des commandes</h3>
            <i class="bx bx-search"></i>
            <i class="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>num commande</th>
                <th>date</th>
                <th>client</th>

                <th style={{ width: "10%" }}>actions</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((commande, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <p>{commande.numCmd}</p>
                    </td>
                    <td>
                      <p>{commande.dateCmd}</p>
                    </td>
                    <td>
                      {commande.client.nom} {commande.client.prenom}{" "}
                    </td>
                    <td>
                      <i
                        class="bx bxs-show bx-xs"
                        onClick={() => {
                          props.setCommandeId(commande.id);
                          props.setitem(3);
                        }}
                      ></i>
                      <i
                        class="bx bxs-x-circle bx-xs"
                        onClick={() => {
                          deleteCommande(commande.id);
                        }}
                      ></i>
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

export default ListCmd;
