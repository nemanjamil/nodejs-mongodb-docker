const RoutesController = require('./controllers/routes.controllers');

exports.routesConfig = function (app) {

    app.get('/', [
        RoutesController.list
    ]);

    app.post('/item/add', [
        RoutesController.add
    ]);

}