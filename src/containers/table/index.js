import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CellHeader from '../../components/cellHeader'
import Cell from '../../components/cell'
import TableControl from '../tableControl'
import styles from './index.module.css'

const Table = ({ table }) => {
  const { rows } = table
  const columnNames = [...new Set(rows.reduce((acc, cur) => Object.keys(cur.row).concat(acc), []))]

  return (
    <section className={styles.table}>
      <CellHeader
        names={columnNames}
      />
      <>
        {
          rows.map(item => {
            return (
              <Cell
                key={item.id}
                id={item.id}
              />
            )
          })
        }
      </>
      <TableControl />
    </section>
  )
}

const mapStateToProps = ({ table }) => ({
  table,
})

Table.propTypes = {
  table: PropTypes.shape({
    rows: PropTypes.array
  }).isRequired
}

export default connect(mapStateToProps)(Table)
