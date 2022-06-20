// import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "New Flight",
  })
}

function create(req, res) {
  res.redirect("/")
}

export{
  newFlight as new,
  create
}
