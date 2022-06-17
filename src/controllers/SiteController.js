class SiteController {

    //GET show dashboarc
    show(req, res) {
        res.render('dashboard');
    }
}

module.exports = new SiteController;
