import react from "react";
import "./card.css";

const Card = () => {
    return ( 
        <div class="card">
            <img src="https://static.zerochan.net/Kozume.Kenma.full.1733638.jpg" class="card-img" alt="img_card"/>
            <div class="card-header">
                 <h4 class="card-title">Товар</h4>
            </div> 
            <div class="card-body">
                 <p class="card-text"> Цена руб. </p>
             </div>

            <div class="inline" >
             <button type="submit" class="like">
             <img src="https://cdn140.picsart.com/303483155190211.png"
                        height="30px" width="30px" alt="favourite"/>
             </button>
             
             <button type="submit" class="buy">
                <h5>Добавить в корзину</h5>
             </button>
             </div>
            
        </div>
    );
};

export default Card;