import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  width: 250px;
  margin: 20px 20px 0 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 253, 118);
  border-radius: 20px 20px 0 0;
`;

export const Avatar = styled.img`
  margin: 10px 0;
  width: 100px;
`;

export const Location = styled.p`
  font-weight: 600;
  margin-top: 5px;
`;

export const Tag = styled.p`
  font-weight: 600;
  margin-top: 5px;
`;

export const UsreName = styled.p`
  font-weight: 600;
`;

export const Stats = styled.ul`
  width: 250px;
  margin: 0 20px 20px 20px;
  border-radius: 0 0 20px 20px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: greenyellow;
  border: 1px 1px 0 0 black solid;
`;

export const Label = styled.span`
  font-weight: 600;
  display: flex;
  justify-content: center;
`;
export const Quantity = styled.span`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  align-items: flex-end;
`;
