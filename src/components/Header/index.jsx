import { Input } from "../Input";

import { Container, Logo, Search, Profile } from "./styles";

export function Header() {
  return(
    <Container>
      <Logo>
        <strong>RocketMovies</strong>
      </Logo>

      <Search>
        <Input />
      </Search>

      <Profile>
        <div>
          <strong>Felipe Vicente</strong>
          <a href="#">Sair</a>
        </div>

        <img 
            src="https://github.com/felipe-gomes-vicente.png"
            alt="Foto do usuário" 
          />
        
      </Profile>

    </Container>
  );
}