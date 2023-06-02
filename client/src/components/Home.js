import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

function Home() {
  const [nbCMD, setnbCMD] = useState();
  const [nbArt, setnbArt] = useState();
  const [nbClt, setnbClt] = useState();

  useEffect(()=>{
    axios
    .get("http://localhost:8080/commande/commandes", {})
    .then((result) => {
      setnbCMD(result.data.length);
    })
    .catch((error) => {
      console.log(error);
    });

    axios
        .get("http://localhost:8080/article/articles", {})
        .then((result) => {
          setnbArt(result.data.length);
        })
        .catch((error) => {
          console.log(error);
        });

        axios
        .get("http://localhost:8080/client/clients", {})
        .then((result) => {
          setnbClt(result.data.length);
        })
        .catch((error) => {
          console.log(error);
        });
  },[])
  return (
    <div>
      <div class="component" id="home">
        <div class="head-title">
          <div class="left">
            <h1>Accueil</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#" class="active">Accueil</a>
              </li>
            </ul>
          </div>
          {/* <a href="#" class="btn-download">
            <i class="bx bxs-cloud-download"></i>
            <span class="text">Download PDF</span>
          </a> */}
        </div>

        <ul class="box-info">
          <li>
            <i class="bx bxs-calendar-check"></i>
            <span class="text">
              <h3>{nbCMD}</h3>
              <p>Commandes</p>
            </span>
          </li>
          <li>
            <i class="bx bxs-group"></i>
            <span class="text">
              <h3>{nbClt}</h3>
              <p>Clients</p>
            </span>
          </li>
          <li>
            <i class="bx bxs-dollar-circle"></i>
            <span class="text">
              <h3>{nbArt}</h3>
              <p>Articles</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
