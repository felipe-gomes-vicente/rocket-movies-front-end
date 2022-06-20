import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

import { Container, Content } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <header>
          <Section title="Meus Filmes" />

          <Button title="+ Adicionar filme" />
        </header>

        <Note
          data={{
            name: "Felipe Vicente",
            id: 1,
            title: "Star Wars",
            ratings: 4,
            description:
              "Lorem  adipisicing elit. Quo dolo eaque fuga laborum sse aut itaque sequi esse aut doloremque ullam unde reiciendis, nemo illo necessitatibus veritatis placeat. Placeat, veritatis quisquam debitis voluptas, quos assumenda illum dignissimos vero totam qui, recusandae quae! Voluptatum quia placeat fuga pariatur minus fugit quas, magni eveniet aliquam? Tenetur vero in ea magni veritatis.",
            tags: [
              { id: "1", name: "Ficção Cientifica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "família" },
            ],
          }}
        />

        <Note
          data={{
            name: "Felipe Vicente",
            id: 2,
            title: "Interstelar",
            ratings: 5,
            description:
              "Lorem  adipisicing elit. Quo dolo eaque fuga laborum sse aut itaque sequi esse aut doloremque ullam unde reiciendis, nemo illo necessitatibus veritatis placeat. Placeat, veritatis quisquam debitis voluptas, quos assumenda illum dignissimos vero totam qui, recusandae quae! Voluptatum quia placeat fuga pariatur minus fugit quas, magni eveniet aliquam? Tenetur vero in ea magni veritatis.",
            tags: [
              { id: "1", name: "Aventura" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Ficção Cientifica" },
            ],
          }}
        />

        <Note
          data={{
            name: "Felipe Vicente",
            id: 3,
            title: "Matrix",
            ratings: 4,
            description:
              "Lorem  adipisicing elit. Quo dolo eaque fuga laborum sse aut itaque sequi esse aut doloremque ullam unde reiciendis, nemo illo necessitatibus veritatis placeat. Placeat, veritatis quisquam debitis voluptas, quos assumenda illum dignissimos vero totam qui, recusandae quae! Voluptatum quia placeat fuga pariatur minus fugit quas, magni eveniet aliquam? Tenetur vero in ea magni veritatis.",
            tags: [
              { id: "1", name: "Ação" },
              { id: "3", name: "Ficção Cientifica" },
            ],
          }}
        />
      </Content>
    </Container>
  );
}
