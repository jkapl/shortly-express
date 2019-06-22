const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  //   console.log(Object.keys(req.cookies).length)
  if (Object.keys(req.cookies).length === 0) {
    models.Sessions.create()
      .then((sess) => models.Sessions.get({ id: sess.insertId }))
      .then((data) => {
        res.cookie('shortlyid', data.hash);
        // res.cookies = { shortlyid: data.hash };
        req.session = { hash: data.hash };
        // console.log(res.cookies)
        // res.send(req);
        next();
      })
      .catch((err) => {
        // console.log(err);
      });
    
  } else {
    models.Sessions.get({hash:req.cookies['shortlyid']})
      .then((sess)=>{
        req.session = { hash: sess.hash };
        next();
      });
  }
  // next();

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

