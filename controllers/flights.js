import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  const newFlight = new Flight()
  const defaultDate = newFlight.departure
  const departDate = defaultDate.toISOString().slice(0,16)
  res.render("flights/new", {
    title: "New Flight",
    departure: departDate
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
  const newFlight = new Flight()
  const defaultDate = newFlight.departure
  const departDate = defaultDate.toISOString().slice(0,16)
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      title: "Mongoose Flights",
      flights: flights,
      departure: departDate,
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
  .catch(error => {
    res.redirect('/')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/flights/index')
  })
  .catch(error => {
    res.redirect('/')
  })
}

function edit(req,res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/edit', {
      title: "Edit Flight",
      flight,
    })
  })
  .catch(error=> {
    res.redirect("/")
  })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body)
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(error => {
    res.redirect('/')
  })
}

function createTicket(req, res) {
  console.log(req.body)
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch(error => {
    res.redirect('/')
  })
}

export{
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket
}
