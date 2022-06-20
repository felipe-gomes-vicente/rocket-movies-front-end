import { FiClock, FiArrowLeft } from "react-icons/fi";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";

import {
  Container, Content, TitleRating, MovieInfo, AuthorInfo, Tags, Description } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <a>
            <FiArrowLeft />
            Voltar
          </a>
          <MovieInfo>
            <TitleRating>
              <h1>Star Wars</h1>
              <Stars ratings={4} />
            </TitleRating>
            <AuthorInfo>
              <div>
                <img
                  src="https://github.com/felipe-gomes-vicente.png"
                  alt="Foto do usuário"
                />
                <span>Por Felipe Vicente</span>
              </div>

              <div>
                <FiClock />
                <span>20/06/22 às 00:00</span>
              </div>
            </AuthorInfo>
            <Tags>
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Familia" />
            </Tags>
            <Description>
              <p>
              Star Wars  é uma franquia do tipo space opera estadunidense criada 
              pelo cineasta George Lucas, que conta com uma série de nove filmes 
              de fantasia científica e dois spin-offs. O primeiro filme foi lançado 
              apenas com o título Star Wars,em 25 de maio de 1977, e tornou-se um 
              fenômeno mundial inesperado de cultura popular, sendo responsável 
              pelo início da "era dos blockbusters", que são superproduções cinematográficas 
              que fazem sucesso nas bilheterias e viram franquias com brinquedos, 
              jogos, livros, etc. Foi seguido por duas sequências, The Empire Strikes 
              Back e Return of the Jedi, lançadas com intervalos de três anos, 
              formando a trilogia original, que segue o trio icônico formado por 
              Luke Skywalker, Han Solo e Princesa Leia, que luta pela Aliança 
              Rebelde para derrubar o tirano Império Galáctico; paralelamente 
              ocorre a jornada de Luke para se tornar um cavaleiro Jedi e a luta 
              contra Darth Vader, um ex-Jedi que sucumbiu ao Lado Sombrio da Força 
              e ao Imperador.
              </p>

              <p>
              Depois de 16 anos sem filmes novos, uma nova trilogia chamada de 
              prequela teve início em 1999, com The Phantom Menace. Esta volta no 
              tempo para contar como Anakin Skywalker se transformou em Darth Vader 
              e acompanha a queda da Ordem Jedi e da República Galáctica, substituída 
              pelo Império. Sendo também lançada com intervalos de três anos, com 
              o último lançado em 2005. As reações à trilogia original foram extremamente 
              positivas, enquanto a trilogia prequela recebeu reações mistas tanto 
              da crítica especializada como do público. Mesmo assim, todos os filmes 
              foram bem sucedidos nas bilheterias e receberam indicações ou ganharam 
              prêmios no Óscar.
              </p>
            </Description>
          </MovieInfo>
        </Content>
      </main>
    </Container>
  );
}
