const path = require('path');
const rootDir = require('../util/path');



exports.getContactUs = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
};

exports.postContactsUs = (req, res)=> {
    res.redirect('/success');
};