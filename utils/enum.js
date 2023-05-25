const RoleEnum = {
    Customer: 1,
    Staff: 2,
    Admin: 3
}

const methodEnum = {
    cash: {
        code: 0,
        text: "Pay in cash"
    },
    momo: {
        code: 1,
        text: "momo wallet"
    },
    paypal: {
        code: 2,
        text: "Paypal"
    },
}

const orderStatusEnum = {
    awaitingCheckPayment: {
        code: 0,
        text: "Waiting for the store to confirm"
    },
    paymentAccepted: {
        code: 1,
        text: "Order confirmed"
    },
    readyToShip: {
        code: 2,
        text: "Packed. Ready to ship"
    },
    transit: {
        code: 3,
        text: "In transit"
    },
    pickup: {
        code: 4,
        text: "The shipment is coming"
    },
    delivered: {
        code: 5,
        text: "Delivery successful"

    },
}

const paymentStatusEnum = {
    unPaid: {
        code: 0,
        text: "Unpaid"
    },
    Failed: {
        code: 1,
        text: "Payment failed"
    },
    Paid: {
        code: 2,
        text: "Successful payment"
    },
}

module.exports = { RoleEnum, methodEnum, orderStatusEnum, paymentStatusEnum }
