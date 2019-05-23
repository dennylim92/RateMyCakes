const Cake = require('./models')


module.exports = {
  index: async (req, res) => {
    const allCakes = await Cake.find({})
      .catch(err => console.error("error ->", err));
    res.json(allCakes);
  },

  create: async (req, res) => {
    const newCake = await Cake.create(req.body)
      .catch(err => console.error('error --> ', err));
    res.json(newCake);
  },

  update: async (req, res) => {
    console.log('controller ->', req.body);
    const udpateCake = await Cake.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body }})
      .catch(err => console.error('error ->', err));
    res.json(udpateCake);
  },

  display: async (req, res) => {
    const oneCake = await Cake.findOne({_id: req.params.id})
      .catch(err =>  console.error('error ->', err))
    res.json(oneCake);
  },


}