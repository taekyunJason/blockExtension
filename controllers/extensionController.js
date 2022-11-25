// db 모듈
const db = require('../models')
const CustomExtension = db.custom_extension
const FixedExtension = db.fixed_extension

//고정 확장자 상태 조회
exports.checkFixedExtension = (req, res) => {
  let tempArr = []
  let fixedExtensionStatusArr = []
  FixedExtension.findAll({
    where: {
      index: 1,
    },
  })
    .then((result) => {
      if (!result) {
        return res
          .status(400)
          .send({ resultCode: '1000', resultMsg: 'Invalid Data' })
      } else {
        if (result.length > 0) {
          tempArr = Object.values(result[0].dataValues)
          for (let i = 1; i <= 7; i++) {
            fixedExtensionStatusArr.push(tempArr[i])
          }
        }
        return res
          .status(200)
          .send({ resultCode: '0000', resultData: fixedExtensionStatusArr })
      }
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message })
    })
}

//고정 확장자 상태 업데이트
exports.updateFixedExtension = (req, res) => {
  FixedExtension.update(
    {
      bat: req.query.bat,
      cmd: req.query.cmd,
      com: req.query.com,
      cpl: req.query.cpl,
      exe: req.query.exe,
      scr: req.query.scr,
      js: req.query.js,
    },
    { where: { index: 1 } }
  )
    .then(() => {
      return res.status(201).send({ resultCode: '0000' })
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message })
    })
}

//커스텀 확장자 추가
exports.updateCustomExtension = (req, res) => {
  CustomExtension.findAll({
    where: {
      extensionName: req.query.extensionName,
    },
  })
    .then((already) => {
      if (already.length > 0) {
        return res.status(403).send({
          resultCode: '2000',
          resultMsg: 'Extension Name is already Existed',
        })
      } else {
        CustomExtension.create({
          extensionName: req.query.extensionName,
        })
          .then(() => {
            return res.status(201).send({ resultCode: '0000' })
          })
          .catch((err) => {
            return res.status(500).send({ message: err.message })
          })
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}

//커스텀 확장자 삭제
exports.deleteCustomExtension = (req, res) => {
  CustomExtension.destroy({
    where: {
      extensionName: req.query.extensionName,
    },
  }).catch((err) => {
    return res.status(500).send({ message: err.message })
  })

  return res.status(204).send()
}
