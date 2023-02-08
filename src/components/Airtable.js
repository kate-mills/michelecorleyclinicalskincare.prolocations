import * as React from "react"

import axios from "axios"

const url = "/api/airtablereduce"

const Airtable = () => {
  const [spas, setSpas] = React.useState([])
  const [mainTitle, setMainTitle] = React.useState("Michele Coley Retailers Near You")

  const fetchData = async () => {
    setMainTitle("Loading...")
    try {
      const { data } = await axios.get(url)
      setSpas(data)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
    setMainTitle(`We Found Locations Near You.`)
  }

  React.useEffect(()=>{
    fetchData()
  }, [])

  return (
    <article className="section section-center">
      <section className="title">
        <h2>{mainTitle}</h2>
        <div className="title-underline" />
      </section>
    <br/>
      <section id="spas">
        {spas.map(spa => {
          const { id, name, phone, city, state } = spa
          return (
            <section key={id} className="spa">
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{city}, {state}</p>
            <br/>
            </section>
          )
        })}
      </section>
    </article>
  )
}
export default Airtable
