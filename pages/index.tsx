import Link from 'next/link'

import Layout from '../components/Layout'
import Section from '../components/Section';

const IndexPage = () => (
  <Layout title="About me">
    <Section>
      <div className="text-center">
        <h1 className="text-4xl">Hi, and welcome... 👋</h1>
        <p className="text-basis">
          Sorry, this page is still under construction, please check again later.
        </p>
      </div>
    </Section>
  </Layout>
)

export default IndexPage