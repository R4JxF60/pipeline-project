const { express } = require('./application');

express.listen(process.env.PORT, function () {
    console.log(`[log]: server up and running on ${process.env.PORT}`);
});