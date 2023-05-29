import PropTypes from 'prop-types';

import {
  BsFiletypeMp3,
  BsFiletypePdf,
  BsFiletypePsd,
  BsFiletypeDocx,
} from 'react-icons/bs';
import {
  SectionStatistics,
  Title,
  List,
  Percentage,
  Label,
  Item,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <Title>Upload stats</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>
              {label === '.mp3' ? (
                <BsFiletypeMp3 />
              ) : label === '.docx' ? (
                <BsFiletypeDocx />
              ) : label === '.pdf' ? (
                <BsFiletypePdf />
              ) : label === '.psd' ? (
                <BsFiletypePsd />
              ) : null}
              {label}
            </Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
