import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type:String,
    enum: ['Southwest','United'],
  }, 
  airport: {
    type:String,
    enum: ['AUS','DFW','DEN','LAX','SAN'],
    default: "DEN",
  },
  flightNo: {
    type: Number, 
    min:10, 
    max:9999
  }, 
  departure: {
    type: Date,
    default: function() {
      const today = new Date()
      const oneYear = today.getFullYear()+ 1
      today.setFullYear(oneYear)
      return today
    }
  }
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}