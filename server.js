const { express } = require('./application');

express.listen(process.env.PORT, process.env.HOST, function () {
    console.log(`[log]: server up and running on ${process.env.HOST}:${process.env.PORT}`);
});