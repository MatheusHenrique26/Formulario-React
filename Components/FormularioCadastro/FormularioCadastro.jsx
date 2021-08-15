import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

function FormularioCadastro({ atualizar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [coletarDados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) atualizar(coletarDados);
  });

  const formularios = [
    <DadosUsuarios atualizar={dadosColetados} />,
    <DadosPessoais atualizar={dadosColetados} />,
    <DadosEntrega atualizar={dadosColetados} />,
    <Typography variant="h5" align="center">
      Obrigado Pelo seu Cadastro
    </Typography>,
  ];

  function dadosColetados(dados) {
    setDados({ ...coletarDados, ...dados });
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
