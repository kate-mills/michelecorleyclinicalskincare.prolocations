require("dotenv").config()
const Airtable = require("airtable-node")

const API_KEY = process.env.GATSBY_AIRTABLE_API
const BASE_ID = process.env.GATSBY_AIRTABLE_BASE_ID
const TABLE_ID = process.env.GATSBY_AIRTABLE_TABLE_ID

const airtable = new Airtable({ apiKey: API_KEY }).base(BASE_ID).table("Spas")

exports.handler = async (event, context, cb) => {
  const { headers } = event
  console.log('event', event)
  let userGeo = {}
  if (headers["x-nf-geo"]) {
    let geoJSON = JSON.parse(headers["x-nf-geo"])
    userGeo = { ...geoJSON }
  }
  try {
    const { records } = await airtable.list({
      sort: [{ field: "state" }, { field: "city" }],
    })
    const spas = records.reduce((accSpas, currSpa) => {
      const { id } = currSpa
      const { name, address, city, state, zip, phone, url, email, webstore } =
        currSpa.fields
      if (state != userGeo?.subdivision?.code) {
        return [...accSpas]
      }
      let spa = {
        id,
        name,
        address,
        city,
        state,
        zip,
        phone,
        url,
        email,
        webstore: webstore || "",
      }
      return [...accSpas, spa]
    }, [])
    return { statusCode: 200, body: JSON.stringify(spas) }
  } catch (err) {
    return { statusCode: 500, body: `General Server Error: ${err}` }
  }
}
