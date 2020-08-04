/* eslint-disable react/no-did-update-set-state */
// It's bugging out and throwing exceptions even when variables are used
/* eslint-disable no-unused-vars */
import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

type SizeObject = {
  width: number;
  height: number;
}

type ROProps = {
  onChange: (size: SizeObject) => void
}

function ResiveObserver (props: ROProps) {
  const isClient = typeof window === 'object'

  function getSize (): SizeObject {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0
    }
  }

  React.useEffect(() => {
    if (!isClient) {
      return
    }

    function handleResize () {
      props.onChange(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  // props.onChange(getSize())

  return (
    <div />
  )
}

type Props = {
  children: React.ReactNode;
  drawerOpen?: boolean;
  onClose?: () => void;
  simple?: boolean;
  modal?: boolean;
}

type State = {
  small: boolean;
  isOpen: boolean;
  scrim: boolean;
  size: SizeObject;
}

export type ComponentProps = Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default class Layout extends React.Component<ComponentProps, State> {
  state: State = {
    small: this.props.modal || false,
    isOpen: this.props.drawerOpen || false,
    scrim: this.props.drawerOpen || false,
    size: {
      width: 0,
      height: 0
    }
  }

  static Drawer: any
  static Content: any

  Scrim: React.RefObject<HTMLDivElement>
  ScrimListener: any;

  constructor (props: ComponentProps) {
    super(props)
    this.Scrim = React.createRef()
    this.HandleScrim = this.HandleScrim.bind(this)
  }

  componentDidUpdate (oldProps: ComponentProps) {
    if (oldProps.drawerOpen !== this.props.drawerOpen) {
      this.setState({ isOpen: this.props.drawerOpen || false })

      if (this.props.drawerOpen === false) {
        setTimeout(() => {
          this.setState({ scrim: false })
        }, 200)
      } else {
        this.setState({ scrim: true })
      }
    }
  }

  componentDidMount () {
    const wait = setInterval(function (this: Layout) {
      if (this.Scrim.current != null) {
        // this.setState({ isOpen: true })
        this.ScrimListener = this.Scrim.current.addEventListener('click', this.HandleScrim)
        clearInterval(wait)
      }
    }.bind(this), 100)
  }

  componentWillUnmount () {
    if (this.Scrim.current == null) return
    this.Scrim.current.removeEventListener('click', this.ScrimListener)
  }

  HandleScrim () {
    if (this.props.onClose === undefined) return
    this.props.onClose()
  }

  render () {
    const {
      drawerOpen,
      children,
      simple,
      ...baseDivProps
    } = this.props

    const isSmall = this.state.small

    const res = (this.state.size.width < 1264) || false
    if (res !== this.state.small) this.setState({ small: res })

    const classes = classnames({
      [styles.layout]: true,
      [styles['scrim-open']]: this.state.scrim,
      [styles['drawer-open']]: this.state.isOpen,
      [styles.small]: isSmall,
      [styles.simple]: simple
    })

    return (
      <div className={classes} {...baseDivProps}>
        <ResiveObserver onChange={(size: SizeObject) => { this.setState({ size }) }} />
        <div className={styles['drawer-scrim']} ref={this.Scrim} />
        {children}
      </div>
    )
  }
}

Layout.Drawer = class extends React.Component<{}, {}> {
  render () {
    const {
      children,
      ...baseDivProps
    } = this.props

    const classes = classnames({
      [styles.drawer]: true
    })

    return (
      <div className={styles['drawer-frame']}>
        <aside className={classes} {...baseDivProps}>
          {children}
        </aside>
      </div>
    )
  }
}

Layout.Content = class extends React.Component<{}, {}> {
  render () {
    const {
      children,
      ...baseDivProps
    } = this.props

    const classes = classnames({
      [styles.content]: true
    })

    return (
      <main className={classes} {...baseDivProps}>
        {children}
      </main>
    )
  }
}

// export const Layout = LayoutObj
