const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl, ' - ', new Date())
  next()
})

app.all('/*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
  res.setHeader('Access-Control-Allow-Credentials', 'true') // 쿠키 주고받기 허용
  next()
})

app.get('/', (req, res) => {
  res.send('Root')
})

app.listen(port, () => {
  console.log(port, '포트로 서버 연결!')
})
