import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Section = ({ children }: Props) => (
  <section className="px-32">
    {children}
  </section>
)

export default Section;
