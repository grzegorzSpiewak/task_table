import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

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

CellHeader.propTypes = {
  names: PropTypes.array.isRequired
}

export default CellHeader
