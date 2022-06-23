import { Meal } from "../models/meals.js"

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Meals',
      meals,
    })
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