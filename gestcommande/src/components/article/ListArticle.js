import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function ListArticle(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      loadarticles();
    }, []);
  
    const loadarticles = () => {
      axios
        .get("http://localhost:8080/article/articles", {})
        .then((result) => {
          setArticles(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  
    function deleteArticle(id) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer cet article ?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "annuler",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "confirmer",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:8080/article/deletearticle?id=${id}`)
            .then(() => {
              Swal.fire("supprimé", "l'article a été supprimer", "success");
              loadarticles();
            })
            .catch((error) => {
              Swal.fire("désolé", "il y une erreur dans la requête", "error");
            });
        }
      });
    }
  
    //   useEffect(() => {
    //     console.log(articles); // Log the updated value of articles whenever it changes
    //   }, [articles]);
    return (
      <div>
        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>liste des articles</h3>
              <i class="bx bx-search"></i>
              <i class="bx bx-filter"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th style={{ width: "35%" }}>libelle</th>
                  <th>code</th>
                  <th>stock</th>
                  <th style={{ width: "10%" }}>actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <p>{article.libelle}</p>
                      </td>
                      <td>
                        <p>{article.code}</p>
                      </td>
                      <td>{article.qteStock}</td>
                      <td>
                        <i
                          class="bx bxs-edit-alt bx-xs"
                          onClick={() => {
                            props.setArticleId(article.id);
                            props.setitem(3);
                          }}
                        ></i>
                        <i class="bx bxs-x-circle bx-xs"onClick={() => {
                            deleteArticle(article.id);
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

export default ListArticle