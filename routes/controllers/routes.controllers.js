const RouterModel = require('../models/routes.models');
exports.list = (req, res) => {
    //res.send('Hello World Test!')

    var articles = [{
            name: 'siki',
            title: 'Siki Title',
            id: 20055
        },
        {
            name: 'miki',
            title: 'Miki Title',
            id: 20053
        },
        {
            name: 'djole',
            title: 'Djole Title',
            id: 45652
        }
    ];

    // res.render("index", {
    //     title: "Start Page",
    //     articles: articles
    // })

    Item.find()
        .then(items => res.render('index', {
            title: "Start Page",
            items,
            articles
        }))
        .catch(err => res.status(404).json({
            msg: 'No items found'
        }));
};

exports.add = (req,res)=> {
    console.log(req.body);
    const newItem = new Item({
        name: req.body.name
      });
    
    newItem.save().then(item => res.redirect('/'));
}
