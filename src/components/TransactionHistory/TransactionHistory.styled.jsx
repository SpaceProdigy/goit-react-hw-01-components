import styled from '@emotion/styled';

export const Container = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
  box-shadow: -3px -2px 20px -1px rgba(0, 0, 0, 0.33);
  margin-bottom: 50px;
`;

export const Title = styled.th`
  background: #6ba9ff;
  padding: 10px;
  border: 1px solid #c7c7c7;
  border-width: 0px 1px;
  color: #fff;
`;

export const Content = styled.td`
  padding: 5px;
  text-transform: capitalize;
  &:nth-of-type(2n) {
    border: 1px solid #c7c7c7;
    border-width: 0px 1px;
  }
`;

export const Row = styled.tr`
  &:nth-of-type(2n) {
    background-color: #f2f2f2;
  }
  &:hover,
  :focus {
    background-color: #d5f5be;
  }
`;
