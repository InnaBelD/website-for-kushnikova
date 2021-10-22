import react from "react";
import Card from "../card/card";
import "./new.css";


const New = () => {
    return (
        <div class="main">
            <h1 align="center">Новинки!</h1>

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

         </div>
        );
    };
    
    export default New;