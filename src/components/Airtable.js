import React, { useEffect, useState } from "react"

import axios from "axios"

import { Text, Heading, WrapItem, Center } from "@chakra-ui/react"

const url = "/api/airtable"

const Airtable = () => {
  const [spas, setSpas] = useState([])
  const [mainTitle, setMainTitle] = useState("Michele Coley Retailers Near You")

  const fetchData = async () => {
    setMainTitle(`Loading...`)
    try {
      const { data } = await axios.get(url)
      setSpas(data)
    } catch (err) {
      console.log(err)
    }
    setMainTitle(`Find Our Products At These Professional Locations`)
    console.log(spas)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Text>{mainTitle}</Text>
      {spas.map(spa => {
        const { id, name, phone, city, state } = spa
        return (
          <WrapItem key={id} as="article">
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
