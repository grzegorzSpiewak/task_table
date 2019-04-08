import React from 'react'
import styles from './index.module.css';

const CellHeader = ({ names }) => {
  return (
    <div
      className={styles.row}
    >
      {
        names.map(name =>
          <div
            key={name}
            className={styles.cell}
          >
            {name}
          </div>
        )
      }
    </div>
  )
}

export default CellHeader
