// It's bugging out and throwing exceptions even when variables are used
/* eslint-disable no-unused-vars */
import React from 'react'
import classnames from 'classnames'
import MenuIcon from 'mdi-react/MenuIcon'
import Spacer from '../Spacer/index'
import styles from './styles.module.scss'

type Props = {
  children?: React.ReactNode;
  title: string;
  showMenu?: boolean;
  onMenuClick?: (...args: any[]) => void;
}

export type ComponentProps = Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default class Appbar extends React.Component<ComponentProps, {}> {
  render () {
    const {
      children,
      className,
      title,
      showMenu,
      onMenuClick,
      ...baseProps
    } = this.props

    const classes = classnames({
      [styles.appbar]: true
    })

    const Click = () => {
      if (onMenuClick) {
        onMenuClick()
      }
    }

    return (
      <div className={classes} {...baseProps}>
        {(showMenu || onMenuClick !== undefined) && (
          <button className={styles['menu-button']} onClick={Click}>
            <MenuIcon />
          </button>
        )}
        <div className={styles.title}>
          {title}
        </div>
        <Spacer />
        {children}
      </div>
    )
  }
}
