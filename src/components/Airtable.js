import * as React from "react"

import { Text, Heading, WrapItem, Center } from "@chakra-ui/react"

const url = "/api/airtablereduce"

const Airtable = () => {
  const [spas, setSpas] = React.useState([])
  const [mainTitle, setMainTitle] = React.useState(
    "Michele Coley Retailers Near You"
  )

  const fetchData = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setSpas(data)
        setMainTitle(`Find Our Products At These Professional Locations`)
        console.log(data)
      })
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Text>{mainTitle}</Text>
      {spas.map(spa => {
        const { id, name, phone, city, state } = spa
        return (
          <WrapItem key={id}>
            <Center>
              <Heading fontSize="xs">{name}</Heading>
              <Text pt="2" fontSize="sm">
                {phone}
              </Text>
              <Text>
                {city}, {state}
              </Text>
            </Center>
          </WrapItem>
        )
      })}
    </>
  )
}
export default Airtable
