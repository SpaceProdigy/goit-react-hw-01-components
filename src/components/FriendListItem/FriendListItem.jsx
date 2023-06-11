import PropTypes from 'prop-types';
import { Item, Status, Avatar, UsreName } from './FriendListItem.styled';
import { RiRadioButtonLine } from 'react-icons/ri';

export const FriendListItem = (id, avatar, name, isOnline) => (
  <Item key={id}>
    <Status status={isOnline}>
      <RiRadioButtonLine />
    </Status>

    <Avatar src={avatar} alt="User avatar" width="48" />
    <UsreName>{name}</UsreName>
  </Item>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
