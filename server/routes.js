const controller = require('./controller')


module.exports = function(app) {
  console.log('hit routes');
  app.get('/cakes', controller.index)
  app.get('/cake/:id', controller.display)
  app.post('/cake/create', controller.create)
  app.put('/cake/:id', controller.update)
  

}