const model = require('../models/item');

exports.trades = (req, res)=>{
    let items = model.find();
    res.render('./item/trades', {items});
};

exports.newTrade = (req, res)=>{
    res.render('./item/newTrade');
};

exports.create = (req, res)=>{
    //res.send('Created a new item');
    let item = req.body;
    model.save(item);
    res.redirect('/items');
};

exports.trade = (req, res, next)=>{
    let id = req.params.id;
    let item = model.findById(id);
    if(item){
        res.render('./item/trade', {item});
    } else {
        let err = new Error('Cannot find an item with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.edit = (req, res, next)=>{
    let id = req.params.id;
    let item = model.findById(id);
    if(item){
        res.render('./item/edit', {item});
    } else {
        let err = new Error('Cannot find a item with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res, next)=>{
    let item = req.body;
    let id = req.params.id;
    if(model.updateById(id, item)){
        res.redirect('/items/'+id);
        
    } else {
        let err = new Error('Cannot find an item with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next)=>{
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/items');
    } else {
        let err = new Error('Cannot find an item with id ' + id);
        err.status = 404;
        next(err);
    }
};