import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 4px 0;
  gap: 5px;
  span {
    font-size: clamp(14px, 14px + 0.6vw, 18px);
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`;