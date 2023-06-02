import React, { useState } from 'react'
import ListArticle from './article/ListArticle';
import AddArticle from './article/AddArticle';
import UpdateArticle from './article/UpdateArticle.js';

function Articles() {
  const [item, setitem] = useState(1);
  const [articleId, setArticleId] = useState();

    // useEffect(() => {
    //   console.log(clientId); // Log the updated value of clients whenever it changes
    // }, [clientId]);

  return (
    <div>
      <div class="component" id="users">
        <div class="head-title">
          <div class="left">
            <h1>articles</h1>
            <ul class="breadcrumb">
              <li
                onClick={() => {
                  setitem(1);
                }}
              >
                <a href="#" className={item === 1 ? "active" : ""}>
                  articles
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
                    ajouter un article
                  </a>
                </li>
              )}
              {item === 3 && (
                <li>
                  <a class="active" href="#">
                    modifier un article
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
                <span class="text">ajouter un article</span>
              </a>
            </div>
          )}
        </div>
        {/* content */}
        {item === 1 && <ListArticle setitem={setitem} setArticleId={setArticleId}/>}
        {item === 2 && <AddArticle setitem={setitem} />}
        {item === 3 && <UpdateArticle setitem={setitem} articleId={articleId} />}
      </div>
    </div>
  );
}

export default Articles