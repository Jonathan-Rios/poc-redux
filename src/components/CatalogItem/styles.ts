import styled from 'styled-components';

export const Product = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin: 10px 0;
  border-bottom: 1px solid #C4C4C4;
  padding-bottom: 10px;

  > div {
    color: #F4EDE8;
  }

  button:disabled {
    color: #F4EDE8;
  }
`;
