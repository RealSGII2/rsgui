import React from 'react'

import { Appbar, Card, Layout, Textbox } from 'rsg-ui-ts'
import 'rsg-ui-ts/dist/index.css'

const App = () => {
  // const [open, setOpen] = React.useState(false)

  // function HandleOpen(isOpen?: boolean) {
  //   setOpen(isOpen || !open)
  // }

  return (
    <>
      <Appbar title="Hello World" />
      <Layout>
        <Layout.Content>
          <div style={{
            width: 350,
            height: "100%",
            maxWidth: "calc(100% - 40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)"
          }}>
            <Card
              title="Login"
              fluid
              actions={[
                {
                  label: "sign up",
                  color: "gray",
                  look: "text"
                },
                {
                  label: "Log in"
                }
              ]}
            >
              <Textbox label="Username" />
              <Textbox label="Password" />
            </Card>
          </div>
        </Layout.Content>
      </Layout>
    </>
  )
}

export default App
