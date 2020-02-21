const express = require('express')
const router = express.Router()
const accountManager = require('../../business-logic-layer/account-manager')
const bookingManager = require('../../business-logic-layer/booking-manager')


router.get("/", function(request,response){
    console.log("BOOKING-ROUTER")
    if(request.session.currentAccount){
		response.render("booking.hbs", {username: request.session.currentAccount.username})
    }
	else{response.render("booking.hbs")}
})

router.post('/book', function(request, response){
    console.log("Post booking: ", request.body.email)
    response.render("booking.hbs", {username: request.session.currentAccount.username})
})




module.exports = router


/*
bookingManager.getAllBookings(function(array, bookings){
        console.log("ALL ACCOUNTS:", bookings)
        response.render("booking.hbs", {bookings, monthAndYear})
    })
*/