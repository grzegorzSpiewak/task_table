// @flow

import React from 'react'
import { connect } from 'react-redux'
import CellHeader from '../../components/cellHeader'
import Cell from '../../components/cell'
import TableControl from '../tableControl'
import styles from './index.module.css';

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

export default connect(mapStateToProps)(Table)
