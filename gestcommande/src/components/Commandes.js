import React, { useState } from "react";
import "../App.css";
import ListCmd from "./commandes/ListCmd";
import AddCmd from "./commandes/AddCmd";
import Swal from "sweetalert2";
import axios from "axios";
import UpdateCmd from "./commandes/UpdateCmd";


function Commandes(props) {
  const [item, setitem] = useState(1);
  const [commandeId, setCommandeId] = useState();
  const [clientId, setClientId] = useState();



  const chooseclient=()=>{
    axios
    .get("http://localhost:8080/client/clients", {})
    .then((result) => {
      console.log(result.data)
      const users=result.data.map(({ id, nom, prenom }) => ({
        id,
        name: `${nom} ${prenom}`
      }));
   
    Swal.fire({
      title: 'Choisissez un client',
      input: 'select',
      inputOptions: users.reduce((options, user) => {
        options[user.id] = user.name;
        return options;
      }, {}),
      showCancelButton: true,
      confirmButtonColor:'#fca72b',
      confirmButtonText: 'confirmer',
      cancelButtonText:'annuler',
      allowOutsideClick: () => !Swal.isLoading()
    }).then((resp) => {
      if (resp.isConfirmed) {
         setClientId(resp.value)
         setitem(2)
      }
    });

  })
  .catch((error) => {
    console.log(error);
  });
    
  }

 

    // useEffect(() => {
    //   console.log(commandeId); // Log the updated value of commandes whenever it changes
    // }, [commandeId]);

  return (
    <div>
      <div class="component" id="users">
        <div class="head-title">
          <div class="left">
            <h1>commandes</h1>
            <ul class="breadcrumb">
              <li
                onClick={() => {
                  setitem(1);
                }}
              >
                <a href="#" className={item === 1 ? "active" : ""}>
                  commandes
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
                    ajouter une commande
                  </a>
                </li>
              )}
              {item === 3 && (
                <li>
                  <a class="active" href="#">
                    modifier une commande
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
                  chooseclient();
                  
                }}
              >
                <i class="bx bx-plus-circle"></i>
                <span class="text">ajouter commande</span>
              </a>
            </div>
          )}
          {/* {item === 2 && (
            <div class="right">
              <a
                href="#"
                class="btn-download"
                onClick={() => {
                  chooseclient();
                  
                }}
              >
                <i class='bx bx-cart'></i>
                <span class="text">ajouter un article</span>
              </a>
            </div>
          )} */}
        </div>
        {/* content */}
        {item === 1 && <ListCmd setitem={setitem} setCommandeId={setCommandeId}/>}
        {item === 2 && <AddCmd setitem={setitem} clientId={clientId} />}
        {item === 3 && <UpdateCmd setitem={setitem} commandeId={commandeId} />}
      </div>
    </div>
  );
}



export default Commandes;
