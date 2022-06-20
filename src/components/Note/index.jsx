import { Stars } from "../Stars";
import { Tag } from "../Tag";

import { Container } from "./styles";

export function Note({ data, ...rest}) {
  return (
    <Container>
      <h2>{data.title}</h2>
      <Stars ratings={data.ratings} />
      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}