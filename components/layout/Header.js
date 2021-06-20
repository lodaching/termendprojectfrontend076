import styles from './Header.module.scss'
import {Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return(
        <nav className={styles.navClass}>
          <div className={styles.navbg}></div>
          <ul>
            <li><a href="/">Home</a></li>
            <li className={styles.dropdown}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="/introduce/elementary">國小</Dropdown.Item>
                    <Dropdown.Item href="/introduce/junior">國中</Dropdown.Item>
                    <Dropdown.Item href="/introduce/senior">高中</Dropdown.Item>
                    <Dropdown.Item href="/introduce/university">大學</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </li>

          </ul>

        </nav>
    )
}