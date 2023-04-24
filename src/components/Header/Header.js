import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    // Introducing [Product Name], the hassle-free way to create a professional and polished resume in minutes
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
        Introducing <span> Intelligent Resume Generator</span>
        </p>
        <p className={styles.heading_short}>
        The hassle-free way to create a professional and polished resume in minutes.
        </p>
        <p className={styles.heading}>
        <span>It's free!</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
