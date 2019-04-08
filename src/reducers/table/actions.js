export const TABLE_ADD_ROW = 'TABLE_ADD_ROW'
export const TABLE_REMOVE_ROW = 'TABLE_REMOVE_ROW'
export const TABLE_EDIT_ROW_CELL = 'TABLE_EDIT_ROW_CELL'
export const TABLE_EDIT_CELL_IN_ROW = 'TABLE_EDIT_CELL_IN_ROW'
export const TABLE_ADD_COLUMN = 'TABLE_ADD_COLUMN'

export function addTableRow() {
  return (dispatch) => {
    dispatch({
      type: TABLE_ADD_ROW,
    })
  }
}

export function removeTableRow(id) {
  return (dispatch) => {
    dispatch({
      type: TABLE_REMOVE_ROW,
      id,
    })
  }
}

export function addTableColumn(column) {
  return (dispatch) => {
    dispatch({
      type: TABLE_ADD_COLUMN,
      column
    })
  }
}

export function editTableRow(id) {
  return (dispatch) => {
    dispatch({
      type: TABLE_EDIT_CELL_IN_ROW,
      id,
    })
  }
}

export function editRowCell(id, columnName, value) {
  return (dispatch) => {
    dispatch({
      type: TABLE_EDIT_ROW_CELL,
      id,
      columnName,
      value
    })
  }
}
