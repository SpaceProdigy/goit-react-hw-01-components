import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils';

export const SectionStatistics = styled.section`
  margin-top: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: white;
  font-weight: 600;
  background-color: ${getRandomHexColor};
  transition: transform 0.3s ease;
  &:hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const Percentage = styled.span`
  margin: 5px;
  display: flex;
  justify-content: center;
`;

export const Label = styled.span`
  margin-top: 5px;
  display: flex;
  align-items: flex-end;
`;
