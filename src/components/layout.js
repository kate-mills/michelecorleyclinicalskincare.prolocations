import * as React from "react"
import { Text } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return(
    <>
    <div style={{padding: '2%', width: '100vw'}}>
    <Text fontSize="6xl" color="primary">MC Retail Locations</Text>
    <main>{children}</main>
    </div>
    </>
  )
}

export default Layout
