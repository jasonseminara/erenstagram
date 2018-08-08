module.exports = {

    show404(err, req, res, next) {
        console.log(err);
        res.sendStatus(404);
    },
    showAll(req, res) {
        res.render('showAll', { posts: res.locals.posts });
    },
    showOne(req, res) {
        res.render('showOne', { id: res.locals.data });
    },
    showEdit(req, res) {
        res.render('showEdit');
    },
    create(req, res) {
        res.render('uploadpage');
        res.redirect('uploadpage', { posts: res.locals.posts }); 
    },
    update(req, res) {
        res.redirect(`/posts/${req.params.id}`);
    },
    destroy(req, res) {
        res.redirect('/posts');
    }
  }; 