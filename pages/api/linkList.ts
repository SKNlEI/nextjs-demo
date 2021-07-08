import type { NextApiRequest, NextApiResponse } from 'next'

export default async function linkList(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method
  const params = req.body
  const data = await fetch('https://mcs-mimp-web.sf-express.com/mcs-mimp/config/frontLinkList', { method, body: params })
  console.log('data', data)
  const result = await data.json()
  res.status(200)
  res.setHeader('Content-Type', 'application/json')
  res.json(result)
}