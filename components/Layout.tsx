import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="flex flex-col h-screen justify-between">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="flex-none basis-16 px-8 pt-4">
      <nav></nav>
    </header>
    <main className="flex-auto">
      {children}
    </main>
    <footer className="flex-none basis-8 px-8 text-center">
      <span>Created by: Andreas Liistro</span>
    </footer>
  </div>
)

export default Layout