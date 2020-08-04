// It's bugging out and throwing exceptions even when variables are used
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './styles.module.scss'

export default class ButtonToolbar extends React.Component<{}, {}> {
  render () {
    const {
      children,
      ...baseProps
    } = this.props

    return (
      <div className={styles['button-toolbar']} {...baseProps}>
        {children}
      </div>
    )
  }
}
