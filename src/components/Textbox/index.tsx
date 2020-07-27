// It's bugging out and throwing exceptions even when variables are used
/* eslint-disable no-unused-vars */
import React from 'react'
import classnames from 'classnames'
import { Typography } from '../Typography'
import styles from './styles.module.scss'

type Props = {
  label: string;
  inputSize: 'small' | 'medium' | 'large';
}

export type ComponentProps = Props & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export class Textbox extends React.Component<ComponentProps, {}> {
  render () {
    const {
      label,
      inputSize,
      ...baseProps
    } = this.props

    const classes = classnames({
      [styles.textbox]: true,
      [styles[`size-${inputSize}`]]: true
    })

    return (
      <div className={styles.container}>
        <Typography type='label'>
          {label}
        </Typography>
        <input className={classes} {...baseProps} />
      </div>
    )
  }
}
