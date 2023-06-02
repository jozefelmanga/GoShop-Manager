import React, { useState } from "react";
import logo from "../../src/img/goshop.png";
import Commandes from "../components/Commandes";
import Users from "../components/Clients";
import Home from "../components/Home";
import "../App.css";
import Articles from "../components/Articles";

function Gestionnaire() {
  const [item, setitem] = useState(1);

  const currentDate = new Date();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("fr-FR", options);

  return (
    <div>
      <section id="sidebar">
        <div class="logo">
          <img src={logo} alt="goshop logo" />
        </div>
        <ul class="side-menu top">
          <li
            className={item === 1 ? "active" : ""}
            onClick={() => {
              setitem(1);
            }}
          >
            <a href="#">
              <i class="bx bx-home-alt"></i>
              <span class="text">Acceuil</span>
            </a>
          </li>
          <li
            className={item === 2 || item === 6 ? "active" : ""}
            onClick={() => {
              setitem(2);
            }}
          >
            <a href="#">
              <i class="bx bxs-dashboard"></i>
              <span class="text">Commandes</span>
            </a>
          </li>
          <li
            className={item === 3 ? "active" : ""}
            onClick={() => {
              setitem(3);
            }}
          >
            <a href="#">
              <i class="bx bx-group"></i>
              <span class="text">Clients</span>
            </a>
          </li>
          <li
            className={item === 5 ? "active" : ""}
            onClick={() => {
              setitem(5);
            }}
          >
            <a href="#">
              <i class="bx bxs-message-dots"></i>
              <span class="text">Articles</span>
            </a>
          </li>
        </ul>
        <div class="bottom">
          <ul class="side-menu">
            {/* <!-- <li>
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li> --> */}
            {/* <li>
              <a href="#" class="logout">
                <i class="bx bxs-log-out-circle"></i>
                <span class="text">Logout</span>
              </a>
            </li> */}
          </ul>
        </div>
      </section>

      <section id="content">
        <nav>
          <div class="date">
            <i class="bx bx-calendar bx-sm"></i>
            <h4>{formattedDate}</h4>
          </div>
          <form action="#">
            <div class="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" class="search-btn">
                <i class="bx bx-search"></i>
              </button>
            </div>
          </form>
          <a href="#" class="profile">
            <i class="bx bx-user bx-sm"></i>
          </a>
        </nav>
        <main>
          {item === 1 && <Home />}
          {item === 2 && <Commandes setitem={setitem} />}
          {item === 3 && <Users />}
          {item === 5 && <Articles />}
        </main>
      </section>
    </div>
  );
}

export default Gestionnaire;
