// Gi app.use nato ni sa server pero di ko kabalo giunsa niya paghibalo nga automatic ni matawag pag mag-error lol. So weird. Middleware function concept ata ni?? 
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)

    res.json({
        message: err.message,
        // instead daw na null, kay mas better if undefined.
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
    })
}

module.exports = {
    errorHandler,
}