import {
  TABLE_ADD_ROW,
  TABLE_REMOVE_ROW,
  TABLE_ADD_COLUMN,
  TABLE_EDIT_ROW_CELL,
  TABLE_EDIT_CELL_IN_ROW
} from './actions'

const rows = [
  {
    id: '1',
    row: { name: 'Clark', surname: 'Kent', email: 'superman@email.com' },
    filled: true,
  },
  {
    id: '2',
    row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
    filled: true,
  },
  {
    id: '3',
    row: { name: 'Tony', surname: 'Stark', email: 'ironmane@email.com' },
    filled: true,
  },
]

const INITIAL_STATE = {
  rows: rows
}

function tableReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TABLE_ADD_ROW:
    const keyValues = state.rows.length === 0 ? ['name', 'surname', 'email'] : Object.keys(state.rows[0].row);
    const rowData = {}
    keyValues.map(val => rowData[val] = '')

    const newRow = {
      id: `${state.rows.length + 5}` || 99,
      row: rowData,
      filled: false
    };

    return {
      ...state,
      rows: [...state.rows, newRow]
    }
  case TABLE_REMOVE_ROW:
    return {
      ...state,
      rows: [...state.rows.filter(item => item.id !== action.id)]
    }
  case TABLE_EDIT_CELL_IN_ROW:
    const splitId = action.id.split('_')
    const id = splitId[0]
    const prop = splitId[1]

    return {
      ...state,
      rows: [...state.rows.reduce((acc, cur) => {
        if (cur.id === id) {
          Object.keys(cur.row).map(key => cur.row[prop] = '')
        }
        acc.push(cur)
        return acc
      }, [])]
    }
  case TABLE_EDIT_ROW_CELL:
    return {
      ...state,
      rows: [...state.rows.reduce((acc, cur) => {
        if (cur.id === action.id) {
          cur.row[action.columnName] = action.value
        }
        acc.push(cur)
        return acc
      }, [])]
    }
  case TABLE_ADD_COLUMN:
    return {
      ...state,
      rows: state.rows.map(x => ({
        id: x.id,
        row: {...x.row, ...action.column },
        filled: x.filled
      }))
    }
  default:
    return state
  }
}

export default tableReducer
