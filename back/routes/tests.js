const express = require('express')
const router = express.Router()
const RegistrationInfo = require('../info')

router
    .post('/save', async (req, res) => {
        const { formState } = req.body
        let userInfo = {}
        userInfo.info = formState.info
        userInfo.username = formState.username
        userInfo.password = formState.password
        let userInfoModel = new RegistrationInfo(userInfo)
        await userInfoModel.save()
        res.json(userInfoModel)
    })

module.exports = router