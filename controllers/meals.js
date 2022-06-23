
function newMeal(req, res) {
  res.render('meals/new', {
    title: 'Meals'
  })
}

function create(req, res) {
  res.redirect('/meals/new')
}

export{
  newMeal as new,
  create,
}