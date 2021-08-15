import { React, useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import validacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuarios({ atualizar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(validacoesCadastro)
  const [erros,validaCampos,possoEnviar] = useErros(validacoes)
 
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          atualizar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="Email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validaCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="Senha"
        name='senha'
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="text" color="primary" variant="contained" fullWidth>
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuarios;
