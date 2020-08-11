import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faHome,
  faList,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <Layout title='Home Page'>
      <div class='jumbotron'>
        <h1 class='display-4'>Hello, world!</h1>
        <p class='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class='my-4' />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a class='btn btn-primary btn-lg' href='#' role='button'>
          Learn more
        </a>
      </div>
    </Layout>
  );
}
