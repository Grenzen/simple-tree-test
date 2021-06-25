import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DefaultPage } from './pages/DefaultPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/default" exact>
        <DefaultPage />
      </Route>
      <Redirect to="/default" />
    </Switch>
  )
}