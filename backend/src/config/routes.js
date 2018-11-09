const express = require('express')

module.exports = function (server) {
    //Rota base
    const router = express.Router()
    server.use('/api', router)

    //Rota de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}
