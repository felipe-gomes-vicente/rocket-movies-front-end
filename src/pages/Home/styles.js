import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 84px;
  overflow-y: auto;
  > header {
  
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 50px;
    
    button {
      width: 210px;
    }
}
  
`;