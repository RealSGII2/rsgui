// It's bugging out and throwing exceptions even when variables are used
/* eslint-disable no-unused-vars */
import React from 'react'
import { ColorType } from '../../utils'
import classnames from 'classnames'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode;
  look?: 'filled' | 'outlined' | 'ghost' | 'text' | 'inverted';
  size?: 'small' | 'medium' | 'large';
  color?: ColorType;
  pill?: boolean;
  elevated?: boolean;
}

export type ComponentProps = Props & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export class Button extends React.Component<ComponentProps, {}> {
  render () {
    const {
      children,
      className,
      look,
      size,
      color,
      pill,
      elevated,
      ...baseProps
    } = this.props

    const classes = classnames({
      [styles.button]: true,
      [styles.pill]: pill,
      [styles.elevated]: elevated,
      [styles[`look-${look || 'filled'}`]]: true,
      [styles[`color-${color || 'brand'}`]]: true,
      [styles[`size-${size || 'small'}`]]: true
    })

    return (
      <button className={classes} {...baseProps}>
        {children}
      </button>
    )
  }
}
