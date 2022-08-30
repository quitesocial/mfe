import React from 'react'

import styled from 'styled-components/macro'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => createStyles({
  bar: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const Container = styled.div``

const Progress = () => {
  const classes = useStyles()
  
  return (
    <Container className={classes.bar}>
      <LinearProgress />
    </Container>
  )
}

export default Progress
