import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  thumbImage: {
    objectFit: 'contain',
  }
}));

const Thumb = ({
  image, uri, align, ...rest
}) => {
  const classes = useStyles();
  const [thumb, setThumb] = useState('');

  if (image && !uri) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumb(reader.result);
    };
    reader.readAsDataURL(image);
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent={align || 'center'}
      m={1}
    >
      <img
        src={uri || thumb}
        alt={uri ? '' : image.name}
        className={classes.thumbImage}
        width={rest.width || 120}
        height={rest.height || 120}
      />
    </Box>
  );
};

Thumb.propTypes = {
  image: PropTypes.object,
  uri: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'center']),
};

export default Thumb;
