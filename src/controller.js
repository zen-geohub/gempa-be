const mongoose = require('mongoose');

const earthquakeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: String,
  properties: {
    "no": Number,
    "date": Date,
    "year": Number,
    "latitude": Number,
    "longitude": Number,
    "magnitude": Number,
    "magnitude_class": String,
    "depth": Number,
    "depth_class": String,
  },
  geometry: {
    type: { type: String },
    coordinates: [Number]
  },
});

const Earthquake = mongoose.model('Earthquake', earthquakeSchema);

const getTest = (req, res) => {
  res.json({ message: 'Hello from the server!' });
};

const getData = (req, res) => {
  const startDate = new Date(req.query.startDate);
  const endDate = new Date(req.query.endDate);

  Earthquake.find({
    "properties.date": {
      "$gte": startDate,
      "$lte": endDate
    }
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  getTest,
  getData,
};
