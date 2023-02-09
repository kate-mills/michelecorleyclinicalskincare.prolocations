import * as React from "react"

import axios from "axios"

import {
  Text,
  Heading,
  WrapItem,
  Center
} from "@chakra-ui/react"

const url = "/api/airtablereduce"

const Airtable = () => {
  const [spas, setSpas] = React.useState([])
  const [mainTitle, setMainTitle] = React.useState(
    "Michele Coley Retailers Near You"
  )

  const fetchData = async () => {
    setMainTitle("Loading...")
    try {
      const { data } = await axios.get(url)
      setSpas(data)
    } catch (err) {
      console.log(err)
    }
    setMainTitle(`Find Our Products At These Professional Locations`)
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
