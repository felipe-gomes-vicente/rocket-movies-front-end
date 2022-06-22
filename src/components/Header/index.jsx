import { Input } from "../Input";

import { Container, Logo, Search, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Logo>
        <h1>RocketMovies</h1>
      </Logo>

      <Search>
        <Input placeholder="Pesquisar pelo Título" />
      </Search>

      <Profile to="/profile" >
        <div>
          <strong>Felipe Vicente</strong>
          <Logout>Sair</Logout>
        </div>

        <img 
            src="https://github.com/felipe-gomes-vicente.png"
            alt="Foto do usuário" 
          />
        
      </Profile>

    </Container>
  );
}