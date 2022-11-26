const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

// Controller
const ExtensionController = require('./controllers/extensionController')

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
  console.log('__dirname', __dirname)
  res.sendFile(__dirname + '/public/blockExtension.html')
})

app.get('/view', (req, res) => {
  console.log('__dirname', __dirname)
  res.sendFile(__dirname + '/public/blockExtension.html')
})

//고정 확장자 상태 조회
app.get('/extension/fixed', ExtensionController.checkFixedExtension)

//고정 확장자 상태 업데이트
app.put('/extension/fixed', ExtensionController.updateFixedExtension)

//커스텀 확장자 추가
app.post('/extension/custom', ExtensionController.updateCustomExtension)

//커스텀 확장자 삭제
app.delete('/extension/custom', ExtensionController.deleteCustomExtension)

app.listen(port, () => {
  console.log(port, '포트로 서버 연결!')
})
