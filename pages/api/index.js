// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.setHeader('link', '<style.css>; rel=stylesheet')
  res.status(200).json()
}
