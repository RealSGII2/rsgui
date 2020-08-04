// It's bugging out and throwing exceptions even when variables are used
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './styles.module.scss'

export default class Spacer extends React.Component<{}, {}> {
  render () {
    return (
      <div className={styles.spacer} />
    )
  }
}
