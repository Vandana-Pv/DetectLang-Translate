const express = require("express");
const router = express.Router();
const {querytranslate,arrayTranslate} = require('../controllers/translate')
const {detectlang} = require('../controllers/detectlang')

router.post('/translatequery',async (req, res) =>{
    console.log('ReqBody',req.body);
    let response = await querytranslate(req.body.query,req.body.targetLang);
    console.log('res---',response);
    return res.status(200).send({reply:response})
})

router.post('/translatearray',async (req, res) =>{
    console.log('ReqBody',req.body);
    // let optionsArray = ['General','Service'];
    let response = await arrayTranslate(req.body.queryArray,req.body.targetLang);
    console.log('res---',response);
    return res.status(200).send({reply:response})
})

router.post('/detectlang',async (req, res) =>{
    console.log('ReqBody',req.body)
    let response = await detectlang(req.body.query);
    console.log('res---',response);
    return res.status(200).send({reply:response})
})

module.exports = router;