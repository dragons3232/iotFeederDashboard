import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box, Container, Typography, makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import '../../theme/styles/dynamic.viewer.css';
import privacy from './privacy';

const useStyles = makeStyles(({
  root: {
    margin: 30,
    marginHorizontal: 20,
    minHeight: '70vh'
  },
  title: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
  },
  content: {
    marginTop: 30,
  }
}));

const Viewer = ({ type, content }) => {
  const classes = useStyles();
  const { state } = useLocation();

  if (state && state.data) {
    content = state.data.content || '';
  }
  const [html, setContent] = useState(content);
  const [title, setTitle] = useState(state && state.data ? state.data.title : '');

  useEffect(() => {
    if (type) {
      switch (type) {
        case 'privacy':
          setTitle(privacy.title);
          setContent(privacy.content);
          break;
        case 'terms':
        case 'dynamic':
        default: break;
      }
    }
  });

  return (
    <Box className={classes.root} id="dynamic-viewer">
      <Container maxWidth="md" id="container">
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Logo />
          <Typography className={classes.title}>{title}</Typography>
        </Box>
        <Box
          id="body"
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Box>
  );
};
Viewer.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string
};
export default Viewer;
