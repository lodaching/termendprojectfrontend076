import styles from './Header.module.scss'

export default function Header() {
    return(
        <nav className={styles.navClass}>
          <div className={styles.navbg}></div>
          <ul>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
          </ul>
        </nav>
    )
}