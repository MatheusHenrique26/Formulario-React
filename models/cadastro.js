function validaCPF(cpf){
    if(cpf.length !==11){
      return {valido:false,texto:'O CPF deve ter 11 digitos'}
    }else{
      return {valido:true,texto:''}
    }
  }
  function validaSenha(senha){
    if(senha.length <3 || senha.length >20){
      return {valido:false,texto:'A senha deve ter entre 3 a 20 digitos'}
    }else{
      return {valido:true,texto:''}
    }
  }
export {validaCPF,validaSenha}