import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Table from '../../containers/table'
/* Pages containers*/

import styles from './index.module.css';

const Layout = () => {
  return (
    <div className={styles.page}>
      <Switch>
        <Route exact path="/" render={() => <Table />} />
        <Route render={() => <h1>error</h1>} />
      </Switch>
    </div>
  )
}

export default Layout
