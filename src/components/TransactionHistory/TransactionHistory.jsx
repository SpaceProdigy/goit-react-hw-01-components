import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
