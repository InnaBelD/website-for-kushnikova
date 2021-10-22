import react from "react";
import Card from "../../components/card/card";
// import "./catalog.css";


const Catalog = () =>{
    return (
        <div class="container">
        
  <span>
      <h1 align="center">Популярное!</h1>
      <div class="row">    
         <div class="col-xl-4 col-md-6 col-sm-12">
             <Card></Card>
         </div>
         <div class="col-xl-4 col-md-6 col-sm-12">
              <Card></Card>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
            <Card></Card>
         </div>
         <div class="col-xl-4 col-md-6 col-sm-12">
             <Card></Card>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
            <Card></Card>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
            <Card></Card>
        </div>
       </div>
    </span>
</div>
        )

}

export default Catalog;