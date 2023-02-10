import React, { useEffect, useState } from "react"

import axios from "axios"

import { Text, Heading, WrapItem, Center } from "@chakra-ui/react"

const GEO_LOCATION_URL = "/geolocation"
const AIRTABLE_URL = "/.netlify/functions/airtable"

const Airtable = () => {
  const [spas, setSpas] = useState([])
  const [geoInfo, setGeoInfo] = useState(null)
  const [userState, setUserState] = useState("")
  const [userCity, setUserCity] = useState("")

  const [mainTitle, setMainTitle] = useState("Michele Coley Retailers Near You")

  const fetchGeoData = async () => {
    try {
      const {
        data: { geo },
      } = await axios.get(GEO_LOCATION_URL)
      setGeoInfo(geo)
      setUserState(geo?.subdivision?.code)
      setUserCity(geo?.city)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData = async () => {
    setMainTitle(`Loading...`)
    try {
      const { data } = await axios.get(AIRTABLE_URL)
      setSpas(data)
    } catch (err) {
      console.log(err)
    }
    if (userCity && userState) {
      setMainTitle(
        `Find Our Products At These Professional Locations Near ${userCity}, ${userState}`
      )
    } else {
      setMainTitle(`Find Our Products At These Professional Locations.`)
    }
    console.log(spas)
  }

  useEffect(() => {
    fetchGeoData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [userState])

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
