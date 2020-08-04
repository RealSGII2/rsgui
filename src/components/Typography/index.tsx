// It's bugging out and throwing exceptions even when variables are used
/* eslint-disable no-unused-vars */
import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode;
  type?: 'h1' |
  'heading1' |
  'h2' |
  'heading2' |
  'h3' |
  'heading3' |
  'h4' |
  'heading4' |
  'h5' |
  'heading5' |
  'h6' |
  'heading6' |
  'sh1' |
  'subheading1' |
  'sh2' |
  'subheading2' |
  'body1' |
  'body2' |
  'button' |
  'caption' |
  'overline' |
  'label';
}

export type ComponentProps = Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default class Typography extends React.Component<ComponentProps, {}> {
  render () {
    const {
      children,
      type,
      ...baseProps
    } = this.props

    const classes = classnames({
      [styles[`typography-${type || 'body'}`]]: true
    })

    return (
      <div className={classes} {...baseProps}>
        {children}
      </div>
    )
  }
}
