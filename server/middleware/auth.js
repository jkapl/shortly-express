const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  if (!req.cookie) {
    models.Sessions.create()
      .then((sess)=> {
        console.log(sess);
        models.Sessions.get({id:sess.insertId})
          .then((data)=>{
            console.log(data);
            res.cookie(domain, data.hash);
            // next()
            // res.send(req);
          });
      })
      .catch((err)=>{
        console.log(err);
      });
    next();
    res.send(req);
  }
  
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

