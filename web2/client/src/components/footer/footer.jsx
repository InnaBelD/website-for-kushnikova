import react from "react";
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
    return (
    <footer class="page-footer font-small blue pt-4">

    <div class="container-fluid text-center text-md-left">
      <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
  
          <h5 class="text-uppercase">О нас</h5>
          <p>Работаем на радость таким же аниме-любителям.</p>
  
        </div>
  
        <hr class="clearfix w-100 d-md-none pb-3"/>  

        <div class="col-md-3 mb-md-0 mb-3">
          <h5 class="text-uppercase">Мини-меню</h5>  
          <ul class="list-unstyled">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/Delivery">Доставка</a>
            </li>
          </ul>  
        </div>  
      </div>  
    </div>  
  </footer>
  );
};

export default Footer;