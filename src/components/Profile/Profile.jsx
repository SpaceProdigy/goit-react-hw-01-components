import PropTypes from 'prop-types';
import { BsEmojiHeartEyes, BsFillPeopleFill, BsHeart } from 'react-icons/bs';
import {
  Container,
  Description,
  Avatar,
  Tag,
  UsreName,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  followers,
  likes,
  views,
}) => (
  <Container>
    <Description>
      <Avatar src={avatar} />
      <UsreName>{username}</UsreName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <li>
        <Label> Followers</Label>
        <Quantity>
          <BsFillPeopleFill />
          {followers}
        </Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>
          <BsEmojiHeartEyes />
          {views}
        </Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>
          <BsHeart />
          {likes}
        </Quantity>
      </li>
    </Stats>
  </Container>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
