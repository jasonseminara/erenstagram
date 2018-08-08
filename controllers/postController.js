const postModel = require('../models/posts');


module.exports = {

    index(req, res, next) {
        postModel.findAll()
            .then((posts) => {
                res.locals.posts = posts;
                next();
            })
            .catch(e => next(e));
    },
    findOne(req, res, next) {
        postModel.findOne(req.params.id)
        .then((onepic) => {
            res.locals.data = onepic;
            next();
        })
            .catch(e => next(e));
    },

    create(req, res, next) {
        debugger;
        postModel.create(req.params.id)
        .then((onepic) => {
            res.locals.data = onepic;
            next();
        })
            .catch(e => next(e));
    },

    // update(req, res, next) {
    //     const { id } = req.params;
    //     const postData = req.body;
    //     postModel.update(id, postData)
    //     .then(() => next())
    //         .catch(e => next(e));
    // },

    // destroy(req, res, next) {
    //     postModel.delete(req.params.id)
    //         .then(() => next())
    //         .catch(e => next(e));
    // },
};