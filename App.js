import "./App.css";
import FormularioCadastro from "./Components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validaCPF, validaSenha } from "./models/cadastro";
import validacoesCadastro from "./contexts/validacoesCadastro";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center">
        Formulario De Cadastro
      </Typography>
      <validacoesCadastro.Provider
        value={{ cpf: validaCPF, senha: validaSenha }}
      >
        <FormularioCadastro atualizar={atualizar} />
      </validacoesCadastro.Provider>
    </Container>
  );
}
function atualizar(dados) {
  console.log(dados);
}

export default App;
