const expressLoader = require('./express');



module.exports = async (app) => {
    //Load express middleware

    const expressApp = await expressLoader(app);
}