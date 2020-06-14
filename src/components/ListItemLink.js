import React from 'react';
import PropTypes from 'prop-types';
import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';

const ListItemLink = (props) => {
  const { icon, label, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon><Icon>{icon}</Icon></ListItemIcon> : null}
        <ListItemText primary={label} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;