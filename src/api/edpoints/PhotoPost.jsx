import React, { useState } from "react";

const PhotoPost = () => {
  const [token, setToken] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);

    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        authorization: "Bearer" + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        placeholder="nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        placeholder="peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        placeholder="idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>enviar</button>
    </form>
  );
};

export default PhotoPost;