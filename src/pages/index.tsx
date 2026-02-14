import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function HomePage(): ReactNode {
  return (
    <div className="container" style={{
      maxWidth: 640,
      margin: '0 auto',
      padding: '4rem 1.5rem',
    }}>
      <h1 style={{
        fontSize: '2.25rem',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: '1.5rem',
      }}>
        Hey, I'm Vasil
      </h1>
      <p style={{
        fontSize: '1.15rem',
        lineHeight: 1.75,
        color: 'var(--ifm-color-emphasis-700)',
        marginBottom: '2rem',
      }}>
        I'm a software engineer interested in performance, systems design, and
        building things that work well. I write about what I learn along the way.
      </p>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Link
          to="/blog"
          className="button button--primary">
          Read the blog
        </Link>
        <Link
          href="https://github.com/dininski"
          className="button button--outline button--secondary">
          GitHub
        </Link>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="Thoughts on software, performance, and engineering">
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
