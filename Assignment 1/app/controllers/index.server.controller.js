/* File name: index.server.controller.js
      Author: Daniel Zhuo
   Student #: 301330354
        Date: Oct 5, 2023
*/

exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};
