import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 200px;
  box-shadow: -3px -2px 20px -1px rgba(0, 0, 0, 0.33);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Status = styled.span`
  color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img``;

export const UsreName = styled.p`
  font-weight: 600;
`;
