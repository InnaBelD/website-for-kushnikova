import react from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Acc= () =>{
    return (
        <div><h5>Пользователь</h5>
<div className="container">
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="ФИО пользователя"
      aria-label="ФИО пользователя"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Ещё какая-то инфа"
      aria-label="Ещё какая-то инфа"
      aria-describedby="basic-addon2"
    />

  </InputGroup>

  </div>
  </div>
    );
}

export default Acc;