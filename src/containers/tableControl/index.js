// @flow

import React from 'react'
import { CSVLink } from "react-csv";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tableActions from '../../reducers/table/actions'
import styles from './index.module.css';

class TableControl extends React.Component {
  state = {
    columnName: '',
  }

  onChange = e => {
    this.setState({
      columnName: e.target.value
    })
  }

  onSubmit(e) {
    const { addTableColumn } = this.props.tableActions;
    const newColumn = {
      [this.state.columnName]: '',
    }

    addTableColumn(newColumn)
    this.setState({
      columnName: '',
    })
    e.preventDefault();
  }

  addRow() {
    const { addTableRow } = this.props.tableActions;
    addTableRow();
  }

  render() {
    const { rows } = this.props.table
    const { columnName } = this.state
    const data = rows.map(({ row }) => row)

    return (
      <div className={styles.wrap}>
        <button
          className={styles.button}
          onClick={this.addRow.bind(this)}>
            add row
        </button>
        <form
          onSubmit={this.onSubmit.bind(this)}
          >
          <input
            className={!columnName ? styles.inactiveButton  : styles.button}
            type="submit"
            disabled={!columnName}
            value="Add Column"
          />
          <input
            className={styles.inputText}
            type='text'
            placeholder={'new column name'}
            value={columnName}
            onChange={this.onChange.bind(this)}
          />
        </form>
        <CSVLink
          className={styles.button}
          data={data}
          filename={"my-file.csv"}
          target="_blank"
        >
          Export to CSV
        </CSVLink>
      </div>
    )
  }
}

const mapStateToProps = ({ table }) => ({
  table,
})

const mapDispatchToProps = (dispatch) => ({
  tableActions: bindActionCreators(tableActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TableControl)
