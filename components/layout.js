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
    <div className="contianer-fluid">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="main-layout">
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2 float-right">
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
        </div>
      </header>

      {children}

    <style jsx>{`
      .circle-user {
        border: 1px solid blue;
        border-radius: 50%;
      }

      .main-layout {
        margin-top: 1vh;
        margin-bottom: 1vh;
      }
    `}</style>
    </div>
  )
}
