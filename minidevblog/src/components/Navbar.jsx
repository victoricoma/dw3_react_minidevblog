import React from 'react'
import styles from './Navbar.module.css'


const Navbar = () => {

  return (
    <>
      <nav className={styles.navbar}>
         <div className={styles.brand}>MiniBlog <span >Dev</span></div>
      </nav>
    </>
  )
}

export default Navbar