import { Meal } from "../models/meals.js"

function newMeal(req, res) {
  res.render('meals/new', {
    title: 'Meals'
  })
}

function create(req, res) {
  console.log(req.body)
  Meal.create(req.body)
  .then(meal => {
    res.redirect('/meals/new')
  })
}

export{
  newMeal as new,
  create,
}