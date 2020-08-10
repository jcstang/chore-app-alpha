import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faList, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Layout({
  children,
  title = 'This is the default title',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer className={styles.card}>
        <div className="container">
          <div className="row">
            <div className="col text-center"><FontAwesomeIcon icon={faList} size="3x" /></div>
            <div className="col text-center"><FontAwesomeIcon icon={faHome} size="6x" /></div>
            <div className="col text-center"><FontAwesomeIcon icon={faUser} size="3x" /></div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        
        `}</style>
    </div>
  )
}
