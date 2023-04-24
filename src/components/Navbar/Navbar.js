import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
    <div className={styles.navbar_box} ><a href="https://chat.openai.com/" target="_blank">Ask CodEx</a></div>
    </div>
  )
}
export default Navbar;