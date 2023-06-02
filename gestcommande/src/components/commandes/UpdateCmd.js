import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";

function UpdateCmd(props) {
  const [client, setClient] = useState([
    {
      id: "",
      nom: "",
      prenom: "",
      telephone: null,
      adresse: "",
    },
  ]);
  const [articles, setArticles] = useState();

  const [detailCmds, setDetailCmds] = useState([]);
  // const [dateCmd, setdateCmd] = useState();
  const [code, setcode] = useState();

  useEffect(() => {
    // axios
    //   .get(`http://localhost:8080/client/getclient?id=${props.clientId}`)
    //   .then((res) => {
    //     setClient(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    axios
      .get("http://localhost:8080/article/articles", {})
      .then((result) => {
        setArticles(result.data);
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get(`http://localhost:8080/commande/getcommande?id=${props.commandeId}`, {})
      .then((result) => {
        setClient(result.data.client)
        setDetailCmds(result.data.detailCmds)
        // setdateCmd(result.data.dateCmd)
        setcode(result.data.numCmd)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.commandeId]);

  
  const chooseArticle = () => {
    const availableArticles = articles.filter(
      (article) => !detailCmds.some((cmd) => cmd.article.id === article.id)
    );
    if (availableArticles.length === 0) {
      Swal.fire({
        title: "il y a aucun article",
        confirmButtonColor: "#fca72b",
      });
    } else {
      const articlesCombo = availableArticles.map(({ id, libelle }) => ({
        id,
        name: `${libelle}`,
      }));

      Swal.fire({
        title: "Choisissez un article",
        input: "select",
        inputOptions: articlesCombo.reduce((options, article) => {
          options[article.id] = article.name;
          return options;
        }, {}),
        confirmButtonColor: "#fca72b",
        confirmButtonText: "suivant",
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((resp) => {
        if (resp.isConfirmed) {
          const selectedArticle = availableArticles.find(
            (article) => article.id === parseInt(resp.value)
          );
          Swal.fire({
            title: "quantite",
            input: "number",
            confirmButtonColor: "#fca72b",
            confirmButtonText: "confirmer",
            showCancelButton: true,
            cancelButtonText: "annuler",
          })
            .then((resp) => {
              if (resp.value > 0) {
                const selectedQuantite = resp.value;
                const newDetailCmd = {
                  quantite: selectedQuantite,
                  article: selectedArticle,
                };
                setDetailCmds((detailCmds) => [...detailCmds, newDetailCmd]);
                // console.log(detailCmds);
              } else {
                Swal.fire({
                  title: "quantite min 1",
                  confirmButtonColor: "#fca72b",
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    }
  };

  const handleDeleteElement = (articleId) => {
    const deletedDetailCmd = detailCmds.find(
      (detailCmd) => detailCmd.article.id === articleId
    );
  
    if (deletedDetailCmd && deletedDetailCmd.id) {
      axios
        .delete(`http://localhost:8080/detailCmd/deletedetailCmd?id=${deletedDetailCmd.id}`)
        .then((response) => {
          console.log("DetailCmd deleted successfully");
        })
        .catch((error) => {
          console.log("Error deleting DetailCmd:", error);
        });
    }



    console.log(detailCmds.filter((detailCmd) => detailCmd.article.id === articleId))
    setDetailCmds((detailCmds) =>
      detailCmds.filter((detailCmd) => detailCmd.article.id !== articleId)
    );
  };

 

  const handleSubmit = () => {
    const currentDate = new Date();
    const formattedDate = moment(currentDate).format("YYYY-MM-DD")
    const commande = {
      id:props.commandeId,
      client: client,
      detailCmds: detailCmds,
      numCmd: code,
      dateCmd: formattedDate,
    };

    // console.log(client);
    // console.log(detailCmds);
    // console.log(commande);
    axios
      .post("http://localhost:8080/commande/updatecommande", commande)
      .then((result) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Ajout effectuée avec succès",
        });
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
            <h3>client</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>nom</th>
                <th>person</th>
                <th>adresse</th>
                <th>telephone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>{client.nom}</p>
                </td>
                <td>
                  <p>{client.prenom}</p>
                </td>
                <td>{client.adresse}</td>
                <td>{client.telephone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="todo">
        <div class="head">
          <h3>Articles</h3>
          {/* <i class="bx bx-plus"></i>
                <i class="bx bx-filter"></i> */}
          <div class="right">
            <a
              href="#"
              class="btn-download"
              onClick={() => {
                chooseArticle();
              }}
            >
              <i class="bx bx-cart"></i>
              <span class="text">ajouter un article</span>
            </a>
          </div>
        </div>
        <ul class="todo-list">
          {detailCmds.map((detailCmd, index) => (
            <li key={index} className="completed">
              <i
                className="bx bxs-x-circle bx-xs"
                onClick={() => {
                  handleDeleteElement(detailCmd.article.id);
                }}
              ></i>
              <p>{detailCmd.article.libelle}</p>
              <p>{detailCmd.quantite}</p>
              {/* <i class="bx bx-dots-vertical-rounded"></i> */}
            </li>
          ))}
        </ul>
        {detailCmds.length > 0 && (
          <div class="right">
            <a
              href="#"
              class="btn-download"
              onClick={() => {
                handleSubmit();
              }}
            >
              <span class="text">confirmer</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateCmd;
