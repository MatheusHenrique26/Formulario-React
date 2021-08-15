import { React, useState,useContext } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@material-ui/core";
import validacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ atualizar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(validacoesCadastro)
  const [erros,validaCampos,possoEnviar] = useErros(validacoes)
 
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          atualizar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        id="Nome"
        label="Nome"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        id="Sobrenome"
        label="Sobrenome"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={validaCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name='cpf'
        label="CPF"
        type="number"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="Promoções"
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="Novidades"
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            color="primary"
          />
        }
      />

      <Button type="text" color="primary" variant="contained">
        Proximo
      </Button>
    </form>
  );
}
export default DadosPessoais;
