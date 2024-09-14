import React, { ReactNode } from 'react'
import Head from 'next/head'

import { Container } from '@mui/system';

import Header from './Header';
import Main from './Main';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="lg">
      <Header />
      <Main>
        {children}
      </Main>
    </Container>
  </>
)

export default Layout