// It's bugging out and throwing exceptions even when variables are used
/* eslint-disable no-unused-vars */
import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode;
  look?: 'block' | 'menu' | 'rounded';
}

export type ComponentProps = Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type ItemProps = {
  children: React.ReactNode;
  active?: boolean;
}

type ItemState = {
  active: boolean;
}

export type ItemComponentProps = ItemProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

class ListObj extends React.Component<ComponentProps, {}> {
  static Item: any;

  render () {
    const {
      children,
      look,
      ...baseProps
    } = this.props

    const classes = classnames({
      [styles.list]: true,
      [styles[`look-${look || 'block'}`]]: true
    })

    return (
      <div className={classes} {...baseProps}>
        {children}
      </div>
    )
  }
}

ListObj.Item = class extends React.Component<ItemComponentProps, ItemState> {
  state: ItemState = {
    active: this.props.active || false
  }

  // componentDidUpdate (oldProps: ItemComponentProps) {
  //   if (oldProps.active !== this.props.active) {
  //     this.setState({
  //       active: this.props.active
  //     })
  //   }
  // }

  render () {
    const {
      children,
      active,
      ...baseDivProps
    } = this.props

    const classes = classnames({
      [styles['list-item']]: true,
      [styles.active]: this.state.active
    })

    return (
      <div className={classes} {...baseDivProps}>
        {children}
      </div>
    )
  }
}

export const List = ListObj
