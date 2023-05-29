import { Container, Title, Content, Row } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <thead>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <Content>{type}</Content>
            <Content>{amount}</Content>
            <Content>{currency}</Content>
          </Row>
        ))}
      </tbody>
    </Container>
  );
};
