require('dotenv').config()
const Airtable = require("airtable-node")

const API_KEY = process.env.GATSBY_AIRTABLE_API
const BASE_ID = process.env.GATSBY_AIRTABLE_BASE_ID
const TABLE_ID = process.env.GATSBY_AIRTABLE_TABLE_ID

const airtable = new Airtable({ apiKey: API_KEY })
  .base(BASE_ID)
  .table("Spas")

exports.handler = async (event, context) => {
  //const { headers } = event
  //let userGeo = JSON.parse(headers["x-nf-geo"])
  //let userCity = userGeo?.city
  //let userState = userGeo?.subdivision?.code

  try {
    const { records } = await airtable.list()
    const spas = records.map(spa => {
      const { id } = spa
      const { name, address, city, state, zip, phone, url, email, webstore } = spa.fields
      return { id, name, address, city, state, zip, phone, url, email, webstore:webstore || '' }
    })
    return { statusCode: 200, body: JSON.stringify(spas) }
  } catch (err) {
    return { statusCode: 500, body: `General Server Error: ${err}` }
  }
}
