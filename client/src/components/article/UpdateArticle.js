import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function UpdateArticle(props) {
    const [article, setArticle] = useState([
        {
        id:"",
        qteStock: null,
        code: "",
        libelle: "",
        }
      ]);
    
      const {id, qteStock, code, libelle } = article;
      const onInputChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
      };
    
      const onSubmit = () => {
        // console.log(article);
        axios
          .post("http://localhost:8080/article/updatearticle", article)
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
              title: 'modification effectuée avec succès'
            })
            props.setitem(1);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      useEffect(() => {
        axios
          .get(`http://localhost:8080/article/getarticle?id=${props.articleId}`)
          .then((result) => {
            console.log(result.data)
            setArticle(result.data)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
      
    
      return (
        <div>
          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>ajouter article</h3>
              </div>
    
              <form id="users-form">
                <div class="form-input">
                  qteStock:
                  <input
                    type="text"
                    id="qteStock"
                    name="qteStock"
                    value={qteStock}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div class="form-input">
                  code:
                  <input
                    type="email"
                    id="code"
                    name="code"
                    value={code}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div class="form-input">
                  libelle:
                  <input
                    type="text"
                    id="libelle"
                    name="libelle"
                    value={libelle}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                {/* <div class="form-input">
                  telephone:
                  <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    value={telephone}
                    onChange={(e) => onInputChange(e)}
                  />
                </div> */}
              </form>
              <div class="right">
                <a
                  href="#"
                  class="btn-download"
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  <span class="text">modifier l'article</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default UpdateArticle