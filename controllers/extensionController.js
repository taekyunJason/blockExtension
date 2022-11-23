const Sequelize = require('sequelize')

const db = require('../models')
const CustomExtension = ''
const FixedExtension = ''

//고정 확장자 상태 조회
exports.checkFixedExtension = (req, res) => {
  FixedExtension.findAll({})
    .then((result) => {
      if (!result) {
        return res
          .status(400)
          .send({ resultCode: '1000', resultMsg: 'Invalid Data' })
      } else {
        return res.status(200).send({ resultCode: '0000', resultData: result })
      }
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message })
    })
}

//고정 확장자 상태 업데이트
exports.updateFixedExtension = (req, res) => {
  FixedExtension.update({
    bat: req.body.bat,
    cmd: req.body.cmd,
    com: req.body.com,
    cpl: req.body.cpl,
    exe: req.body.exe,
    scr: req.body.scr,
    js: req.body.js,
  })
    .then(() => {
      return res.status(201).send({ resultCode: '0000' })
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message })
    })
}

//커스텀 확장자 추가
exports.updateCustomExtension = (req, res) => {
  CustomExtension.create({
    extension_name: req.body.extension_name,
  })
    .then(() => {
      return res.status(201).send({ resultCode: '0000' })
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message })
    })
}

//커스텀 확장자 삭제
exports.deleteCustomExtension = (req, res) => {
  CustomExtension.destroy({
    where: {
      extension_name: req.body.extension_name,
    },
  }).catch((err) => {
    return res.status(500).send({ message: err.message })
  })

  return res.status(204).send()
}
