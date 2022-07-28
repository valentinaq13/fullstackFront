import React, { useState, useEffect } from 'react';
import axios from "axios";


function App() {
  const [state, setState] = useState("");
  const [input, setInput] = useState("");
  const handleChange = (evento) => {
    evento.preventDefault();
    setInput(evento.target.value);
  };
  useEffect(() => {

  }, [state]);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    axios.get(`https://fierce-gorge-29327.herokuapp.com/iecho?text=${input}`).then(res => {
      const resp = res.data;
      setState(resp);
      console.log(resp)
    })
      .catch((e) => {
        console.log(e);
      });
    setInput("")
  };
  function handleClick(e) {
      setState("")
  }
  return (
    <div>
      <nav className="navbar navbar-dark bg-danger d-flex justify-content-center">
        <form onSubmit={handleSubmit} class="d-flex justify-content-center">
          <input type="text" class="form-control" required placeholder="Insert text" value={input} autoComplete="off" onChange={(evento => handleChange(evento))} aria-label="Username" aria-describedby="basic-addon1" />
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
        <button class="btn btn-primary m-2" onClick={handleClick} >Clear</button>
      </nav>
      <div class="w-100 p-3" >
      <div className="container p-5 bg-light">
        <p className="p-2">Results:</p>
        <div className="container-sm">
          <input type="text" class="form-control m-2" required placeholder="Third text" value={state[2] || " "} autoComplete="off" aria-label="Username" aria-describedby="basic-addon1" />
          <input type="text" class="form-control m-2" required placeholder="Second text" value={state[1] || " "} autoComplete="off" aria-label="Username" aria-describedby="basic-addon1" />
          <input type="text" class="form-control m-2" required placeholder="First text" value={state[0] || " "} autoComplete="off" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;