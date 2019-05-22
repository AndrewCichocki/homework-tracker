import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}))

function Menu({ pages }) {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  function handleChange(event, newValue) {
    setValue(newValue)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          {pages.map(({ label }, i) => (<Tab label={label} key={i} />) )}
        </Tabs>
      </AppBar>
      {pages.map(({ content }, i) =>
        value === i && (<TabContainer key={i}>{content}</TabContainer>))}
    </div>
  )
}

export default Menu