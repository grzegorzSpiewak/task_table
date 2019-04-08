// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tableActions from '../../reducers/table/actions'
import styles from './index.module.css';

// Object.keys(row).map(r => <h1 key={id + r}>{row[r] || 'placeholder'}</h1>)
class Cell  extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    columnName:  PropTypes.string,
    rowId:  PropTypes.string,
    id:  PropTypes.string.isRequired,
    tableActions: PropTypes.shape({
      editTableRow: PropTypes.func.isRequired,
      editRowCell: PropTypes.func.isRequired,
    }).isRequired,
    table: PropTypes.shape({
      rows: PropTypes.array.isRequired
    }).isRequired
  }

  state = {
    value: '',
    columnName: '',
    rowId: '',
  }

  onChange = e => {
    this.setState({
      value: e.target.value,
      columnName: e.target.name,
      rowId: e.target.id,
      isActive: true,
    })
  }

  onSubmit(e) {
    const { rowId, columnName, value } = this.state
    const { editRowCell } = this.props.tableActions
    editRowCell(rowId, columnName, value)
    e.preventDefault()
  }

  editRow(e) {
    const editedCell = e.target.name
    const { editTableRow } = this.props.tableActions;
    editTableRow(editedCell);
  }

  render() {
    const { id, table } = this.props;
    const row = table.rows.find(row => row.id === id).row
    const keys = Object.keys(row);

    return (
      <div
        className={styles.row}
      >
        {
          keys.map(key => row[key] ?
            <div
              className={styles.cell}
              key={`${id}_${key}`}
              >
                <p>{
                  row[key]
                }</p>
                <button
                  className={styles.button}
                  name={`${id}_${key}`}
                  onClick={this.editRow.bind(this)}>
                  edit
                </button>
            </div>
          :
            <div
              key={`${id}_${key}`}
              className={styles.cell}
            >
              <form
                className={styles.form}
                onSubmit={this.onSubmit.bind(this)}
              >
                <input
                  className={styles.inputText}
                  type='text'
                  placeholder={`new ${key}`}
                  name={key}
                  id={id}
                  onChange={this.onChange.bind(this)}
                />
                <input
                  className={styles.button}
                  type="submit"
                  value="Save"
                />
              </form>
            </div>
          )
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  tableActions: bindActionCreators(tableActions, dispatch),
})

const mapStateToProps = ({ table }) => ({
  table,
})

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
