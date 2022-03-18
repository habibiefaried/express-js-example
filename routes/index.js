var express = require('express');
var router = express.Router();
const { exec } = require("child_process");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/command', function(req, res, next) {
  let name = req.query.filename
  if (name == undefined){
    name = ""
  }

  exec(`ls ${name}`, {'shell':'powershell.exe'}, (error, stdout, stderr) => {
    if (error) {
      res.json({"status": "ERROR", "output": error})
      return 
    }
      
    if (stderr) {
      res.json({"status": "ERROR", "output": stderr})
      return 
    }

    res.json({"status": "OK", "output": stdout})
    return 
  });
});

module.exports = router;
