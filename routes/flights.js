import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

/* GET users listing. */
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/index', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.get('/:id/edit', flightsCtrl.edit)
router.post('/:id/tickets', flightsCtrl.createTicket)
router.post('/:id/meals', flightsCtrl.addMeal)
router.delete('/:id', flightsCtrl.delete)
router.put('/:id', flightsCtrl.update)

export {
  router
}
