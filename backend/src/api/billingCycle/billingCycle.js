const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Campo nome é obrigatório."]},
    value: {type: Number, min: 0, required: [true, "Campo valor é obrigatório."]}
})

const debtSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Campo nome é obrigatório."]},
    value: {type: Number, min: 0, required: [true, "Campo valor é obrigatório."]},
    status: {type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Campo nome é obrigatório."]},
    month: {type: Number, min: 1, max: 12, required: [true, "Campo mes é obrigatório."]},
    year: {type: Number, min: 1970, max: 2100, required: [true, "Campo ano é obrigatório."]},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
