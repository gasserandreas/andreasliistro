import { FC } from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import theme from '../utils/theme';

const Header: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        paddingTop={6}
        paddingBottom={6}
      >
        <Box flex={1}>
          <Typography fontSize={32} fontWeight={700}>
            AL
          </Typography>
        </Box>
        <Box>
          <nav>
            <Link
              href="https://www.linkedin.com/in/andreasliistro"
              target={'_blank'}
              rel={'noopener noreferrer'}
              color={theme.palette.text.secondary}
            >Contact</Link>
          </nav>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
