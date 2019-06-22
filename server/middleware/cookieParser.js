const parseCookies = (req, res, next) => {
  let cookies = req.headers;
  var splitCookArr = [];
  var cookieObj = {};

  if (cookies.cookie) {
    var cookieArray = cookies.cookie.split('; ');
    for (var i=0; i<cookieArray.length; i++) {
      splitCookArr.push(cookieArray[i].split('='));
    }
    for (var i=0;i<splitCookArr.length; i++) {
      cookieObj[splitCookArr[i][0]] = splitCookArr[i][1];
    }
  }
  req.cookies = cookieObj;
  next();
  res.send(req);

};

module.exports = parseCookies;