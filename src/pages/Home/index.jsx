import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";


import { Container, Content } from "./styles";

export function Home() {

  return (
    <Container>
      <Header />

      <Content>
        <Section title="Meus Filmes">
          <Note data={{
            title: "Star Wars",
            tags: [
              { id: "1", name: "Ficção Cientifica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "família" }
            ]
          }} 
          
          />
        </Section>
      </Content>
    </Container>
  );
}
