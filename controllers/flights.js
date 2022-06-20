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
  .catch(error => {
    res.redirect('/flights/index')
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
    res.render("flights/edit", {
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
    res.redirect(`/movies/${movie._id}`)
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
}
