import react from "react";
import "./nav-bar.css";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">Главная</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic"> Каталог </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="/Catalog">Фигурки</Dropdown.Item>
                        <Dropdown.Item href="/Catalog">Манга</Dropdown.Item>
                        <Dropdown.Item href="/Catalog">Другое</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>                 
                  <li class="nav-item">
                    <a class="nav-link" href="/Delivery">Доставка</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Aut/Login">Вход/Регистрация</a>
                  </li>
                </ul>

                <div class="navbar-nav mb-2 mb-lg-0">
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Что вы хотите найти?" aria-label="Search"></input>
                  <button class="btn btn-outline-success" type="submit">Поиск</button>
                </form>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/Like">
                        <img src="https://cdn140.picsart.com/303483155190211.png"
                        height="30px" width="30px" alt="favourite"/>
                        </a>
                        </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/Basket">
                        <img src="https://ylianova.ru/800/600/https/www.pinclipart.com/picdir/big/156-1566134_clip-art-shopping-cash-png-download.png"
                        height="30px" width="30px" alt="buy"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
    );
};

export default Navbar;