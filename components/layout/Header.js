import styles from './Header.module.scss'
import {Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return(
        <nav className={styles.navClass}>
          <div className={styles.navbg}></div>
          <ul>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li>
                <Dropdown className={}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="/shop/hats">Hats</Dropdown.Item>
                    <Dropdown.Item href="/shop/jackets">Jackets</Dropdown.Item>
                    <Dropdown.Item href="/shop/sneakers">Sneakers</Dropdown.Item>
                    <Dropdown.Item href="/shop/womens">Wome</Dropdown.Item>
                    <Dropdown.Item href="/shop/mens">Men</Dropdown.Item>
                    </Dropdown.Menu>
              </Dropdown></li>

          </ul>

        </nav>
    )
}