import * as React from "react"
import { Flex, Box, Text } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return(
    <>
    <Text fontSize="6xl" color="primary">MC Retail Locations</Text>
    <Box>{children}</Box>
    </>
  )
}

export default Layout
