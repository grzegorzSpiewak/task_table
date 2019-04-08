import reducer from './reducers.js'
import * as types from './actions.js'
import expect from 'expect'

const INITIAL_STATE = {
  rows: [
    {
      id: '1',
      row: { name: 'Clark', surname: 'Kent', email: 'superman@email.com' },
    },
    {
      id: '2',
      row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
    },
    {
      id: '3',
      row: { name: 'Tony', surname: 'Stark', email: 'ironmane@email.com' },
    },
  ]
}

describe('Table reducer - test', () => {

  it('Should return initial state', () => {
    const result = reducer(undefined, { type: 'unknown' })
    expect(result).toEqual(INITIAL_STATE)
  })

  it('Should handle TABLE_ADD_ROW action', () => {
    const actionMock = {
      type: types.TABLE_ADD_ROW,
    }

    const resultMock = {
      rows: [
        {
          id: '1',
          row: { name: 'Clark', surname: 'Kent', email: 'superman@email.com' },
        },
        {
          id: '2',
          row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
        },
        {
          id: '3',
          row: { name: 'Tony', surname: 'Stark', email: 'ironmane@email.com' },
        },
        {
          id: '8',
          row: { name: '', surname: '', email: '' },
        },
      ]
    }

    const result = reducer(INITIAL_STATE, actionMock)
    expect(result).toEqual(resultMock)
  })

  it('Should handle TABLE_REMOVE_ROW action', () => {
    const actionMock = {
      type: types.TABLE_REMOVE_ROW,
      id: '3'
    }

    const resultMock = {
      rows: [
        {
          id: '1',
          row: { name: 'Clark', surname: 'Kent', email: 'superman@email.com' },
        },
        {
          id: '2',
          row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
        },
      ]
    }

    const result = reducer(INITIAL_STATE, actionMock)
    expect(result).toEqual(resultMock)
  })

  it('Should handle TABLE_REMOVE_ROW action - if number passed', () => {
    const actionMock = {
      type: types.TABLE_REMOVE_ROW,
      id: 3
    }

    const resultMock = {
      rows: [
        {
          id: '1',
          row: { name: 'Clark', surname: 'Kent', email: 'superman@email.com' },
        },
        {
          id: '2',
          row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
        },
      ]
    }

    const result = reducer(INITIAL_STATE, actionMock)
    expect(result).toEqual(resultMock)
  })

  it('Should handle TABLE_REMOVE_ROW action - if invalid id passed', () => {
    const actionMock = {
      type: types.TABLE_REMOVE_ROW,
      id: '7'
    }

    const resultMock = {
      rows: [
        {
          id: '1',
          row: { name: 'Clark', surname: 'Kent', email: 'superman@email.com' },
        },
        {
          id: '2',
          row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
        },
        {
          id: '3',
          row: { name: 'Tony', surname: 'Stark', email: 'ironmane@email.com' },
        },
      ]
    }

    const result = reducer(INITIAL_STATE, actionMock)
    expect(result).toEqual(resultMock)
  })

  it('Should handle TABLE_EDIT_CELL_IN_ROW action', () => {
    const actionMock = {
      type: types.TABLE_EDIT_CELL_IN_ROW,
      id: '1_surname'
    }

    const resultMock = {
      rows: [
        {
          id: '1',
          row: { name: 'Clark', surname: '', email: 'superman@email.com' },
        },
        {
          id: '2',
          row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
        },
        {
          id: '3',
          row: { name: 'Tony', surname: 'Stark', email: 'ironmane@email.com' },
        },
      ]
    }

    const result = reducer(INITIAL_STATE, actionMock)
    expect(result).toEqual(resultMock)
  })

  it('Should handle TABLE_EDIT_CELL_IN_ROW action - if Capitalizes, Lowercased id passed', () => {
    const actionMock = {
      type: types.TABLE_EDIT_CELL_IN_ROW,
      id: '1_SurNAME'
    }

    const resultMock = {
      rows: [
        {
          id: '1',
          row: { name: 'Clark', surname: '', email: 'superman@email.com' },
        },
        {
          id: '2',
          row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
        },
        {
          id: '3',
          row: { name: 'Tony', surname: 'Stark', email: 'ironmane@email.com' },
        },
      ]
    }

    const result = reducer(INITIAL_STATE, actionMock)
    expect(result).toEqual(resultMock)
  })

  it('Should handle TABLE_EDIT_ROW_CELL action', () => {
    const actionMock = {
      type: types.TABLE_EDIT_ROW_CELL,
      id: '1',
      columnName: 'surname',
      value: 'test'
    }

    const resultMock = {
      rows: [
        {
          id: '1',
          row: { name: 'Clark', surname: 'test', email: 'superman@email.com' },
        },
        {
          id: '2',
          row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
        },
        {
          id: '3',
          row: { name: 'Tony', surname: 'Stark', email: 'ironmane@email.com' },
        },
      ]
    }

    const result = reducer(INITIAL_STATE, actionMock)
    expect(result).toEqual(resultMock)
  })

  it('Should handle TABLE_EDIT_ROW_CELL action - if now new value passed', () => {
    const actionMock = {
      type: types.TABLE_EDIT_ROW_CELL,
      id: '1',
      columnName: 'surname',
      value: ''
    }

    const resultMock = {
      rows: [
        {
          id: '1',
          row: { name: 'Clark', surname: '', email: 'superman@email.com' },
        },
        {
          id: '2',
          row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com' },
        },
        {
          id: '3',
          row: { name: 'Tony', surname: 'Stark', email: 'ironmane@email.com' },
        },
      ]
    }

    const result = reducer(INITIAL_STATE, actionMock)
    expect(result).toEqual(resultMock)
  })

  it('Should handle TABLE_ADD_COLUMN action', () => {
    const actionMock = {
      type: types.TABLE_ADD_COLUMN,
      column: {
        'testName': ''
      }
    }

    const resultMock = {
      rows: [
        {
          id: '1',
          row: { name: 'Clark', surname: '', email: 'superman@email.com', testName: '' },
        },
        {
          id: '2',
          row: { name: 'Bruce', surname: 'Wayne', email: 'batman@email.com', testName: ''  },
        },
        {
          id: '3',
          row: { name: 'Tony', surname: 'Stark', email: 'ironmane@email.com', testName: ''  },
        },
      ]
    }

    const result = reducer(INITIAL_STATE, actionMock)
    expect(result).toEqual(resultMock)
  })
})
