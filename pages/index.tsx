
import { Typography, Box, Link } from '@mui/material';

import Layout from '../components/Layout'
import Section from '../components/Section';

const IndexPage = () => {
  return (
    <Layout title="About me">
      <Section>
        <Typography variant="h1" gutterBottom>Hi, I&apos;am Andreas Liistro</Typography>
        <Typography variant="body1" gutterBottom>
          Frontend tech lead and fullstack engineer currently working at
          {' '}
          <Link
            href="https://www.novartis.com/research-development/novartis-institutes-biomedical-research"
            target={'_blank'}
            rel={'noopener noreferrer'}
          >Novartis Institutes for BioMedical Research (NIBR)
          </Link>
          .
        </Typography>
        <Typography variant="body1" gutterBottom>
          Building awesome software solutions with my team,
          {' '}
          <i>&quot;nerding&quot;</i> out about new technologies
          {' '}
          and spending time with playing guitar or cycling is what keeps me pushing every day.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Drop me a
          {' '}
          <Link
            href="https://www.linkedin.com/in/andreasliistro"
            target={'_blank'}
            rel={'noopener noreferrer'}
          >message</Link>
          {' '}
          if you want to know more.
        </Typography>
      </Section>
    </Layout>
  );
}

export default IndexPage