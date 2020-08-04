// It's bugging out and throwing exceptions even when variables are used
/* eslint-disable no-unused-vars */
import React from 'react'
import classnames from 'classnames'
import { ColorType } from '../../utils'
import ActionButton from '../Button'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode;
  title?: string;
  actions?: {
    label: string;
    look?: 'filled' | 'outlined' | 'ghost' | 'text' | 'inverted';
    color?: ColorType;
    onClick?: (...args: any[]) => void;
  }[];
  elevated?: boolean;
  bordered?: boolean;
  selected?: boolean;
  fluid?: boolean;
  onClick?: (e: MouseEvent) => void;
}

export type ComponentProps = Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default class Card extends React.Component<ComponentProps, {}> {
  constructor (props: ComponentProps) {
    super(props)
    this.HandleClick = this.HandleClick.bind(this)
  }

  HandleClick (...args: any[]) {
    if (this.props.onClick !== undefined) {
      this.props.onClick(args[0])
    }
  }

  render () {
    const {
      children,
      title,
      actions,
      elevated,
      bordered,
      selected,
      onClick,
      fluid,
      ...baseProps
    } = this.props

    const classes = classnames({
      [styles.card]: true,
      [styles.interactable]: onClick !== undefined,
      [styles['toolbar-border']]: bordered,
      [styles.elevated]: elevated,
      [styles.selected]: selected,
      [styles.fluid]: fluid
    })

    return (
      <div className={classes} {...baseProps}>
        <div className={styles.interact} onClick={this.HandleClick}>
          {title && (
            <div className={styles.toolbar}>
              {title}
            </div>
          )}

          <div className={styles.content}>
            {children}
          </div>
        </div>

        {actions !== undefined && (
          <div className={styles.actions}>
            {actions.map(action => {
              const {
                look,
                label,
                onClick,
                color
              } = action

              return (
                <ActionButton key={Math.floor(Math.random() * 999999999999999999999)} look={look} color={color || 'brand'} onClick={onClick}>
                  {label}
                </ActionButton>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}
