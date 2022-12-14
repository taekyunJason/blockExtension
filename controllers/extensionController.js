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
      // 입력받은 커스텀 확장자 글자수 검사
      if (req.query.extensionName.length > 20) {
        return res.status(400).send({
          resultCode: '2000',
          resultMsg: 'Extension Name is longer than 20',
        })
      } else {
        // 입력받은 커스텀에 한글이 있는지 검사
        const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g
        if (regExp.test(req.query.extensionName)) {
          return res.status(400).send({
            resultCode: '2000',
            resultMsg: 'Extension Name can only be entered in English.',
          })
        } else {
          // 기존 DB에 일치하는 커스텀 확장자가 있는지 검사
          if (already.length > 0) {
            return res.status(400).send({
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
        }
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
