var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/:cd', async (req,res)=>{
    const api_url = `http://emergencynumberapi.com/api/country/${req.params.cd}`;
    const response = await fetch(api_url);
    const json = await response.json();
    res.json(json);
});

module.exports = router;
