
import { Container, Tittle, ContentForms } from "./style";

export const Login = () => {

  const handleLogin = () => {
    alert("Login");
  };

  return (
    <Container>
        <img src ={"https://i.imgur.com/trQAZQE.jpeg"}/>
      <ContentForms>
        <Tittle>Login</Tittle>
        
        <InputField propsplaceholder="Digite seu login" propstype="email" />

        <InputField propsplaceholder="Digite sua senha" propstype="password" />

        <Button title="Entrar" handleFunction={handleLogin} /> 
      </ContentForms>
    </Container>
  );
};