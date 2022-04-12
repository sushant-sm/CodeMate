const express = require("express");
const router = express.Router({ mergeParams: true });
const middleware = require("../middleware");

router.get("/",middleware.isLoggedIn, (req, res) => {
  var curUser = req.user;
  res.render("profile", {curUser:curUser})


  // Post.find({}, (err, allposts) => {
  //   if (err) {
  //     console.log("Error in find");
  //     console.log(err);
  //   } else {
  //     res.render("profile", {
  //       posts: allposts.reverse(),
  //       currentUser: req.user,
  //     });
  //   }
  // });

});

module.exports = router;