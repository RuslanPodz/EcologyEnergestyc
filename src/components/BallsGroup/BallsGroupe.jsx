import React from 'react';

import styles from './BallsGroupe.module.css';

const BallsGroupe1 = () => {
  return (
    <>
      <div className={styles.ballsContainer1}>
        <div className={styles.ballSmall} style={{ width: '40px', height: '40px' }} />
        <div className={styles.ballMedium} style={{ width: '140px', height: '140px' }} />
        <div className={styles.ballBig} style={{ width: '240px', height: '240px' }} />
      </div>
      <div className={styles.ballsContainer2}>
      <div className={styles.ballSmall} style={{ width: '40px', height: '40px' }} />
        <div className={styles.ballMedium} style={{ width: '140px', height: '140px' }} />
        <div className={styles.ballBig} style={{ width: '240px', height: '240px' }} />
      </div>
      <div className={styles.ballsContainer3}>
        <div className={styles.ballSmall3} style={{ width: '40px', height: '40px' }} />
        <div className={styles.ballMedium3} style={{ width: '140px', height: '140px' }} />
        <div className={styles.ballBig3} style={{ width: '240px', height: '240px' }} />
      </div>
      <div className={styles.ballsContainer4}>
        <div className={styles.ballSmall4} style={{ width: '40px', height: '40px' }} />
        <div className={styles.ballMedium4} style={{ width: '140px', height: '140px' }} />
        <div className={styles.ballBig4} style={{ width: '240px', height: '240px' }} />
      </div>

     
    </>
  );
};

export default BallsGroupe1;
