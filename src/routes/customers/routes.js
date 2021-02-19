const {createData,readData} = require('../../controllers/customers/app')

const route = ({router,makeExpressCallback}) => {
    //configure route and attached callbacks with controller
    router.get('/customer',makeExpressCallback(readData))
    router.post('/customer',makeExpressCallback(createData))

    return router
}

module.exports = route