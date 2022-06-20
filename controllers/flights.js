import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "New Flight",
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight =>{
    res.redirect("/flights/index")
  })
  .catch(error => {
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      title: "Mongoose Flights",
      flights: flights,
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      title: "Flight Details",
      flight: flight,
    })
  })
}

export{
  newFlight as new,
  create,
  index,
  show,
}
