import { FC } from "react";

import { Box, Container, SxProps } from '@mui/material';

import { css } from '@emotion/react';

import theme from "../utils/theme";

type MainPropsType = {
  children?: React.ReactNode;
};

const Main: FC<MainPropsType> = ({ children }) => {
  const styles = {
    content: css(`
      ${theme.breakpoints.up('sm')} {
        padding-left: 3rem;
        padding-right: 3rem;
      }
      `) as SxProps,
  };

  return (
    <Container maxWidth="lg">
      <Box sx={styles.content}>
        {children}
      </Box>
    </Container>
  )
};

export default Main;
