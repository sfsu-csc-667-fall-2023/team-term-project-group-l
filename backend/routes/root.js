const express = require("express");

const router = express.Router();

router.get("/", (_request, response) => {
  const name = "Sajan";
  response.render("root", { name });
});

// router.get("/:id", (_request, response) =>{
//     response.send({message:`You are looking for id ${_request.params.id}`})
// })

module.exports = router;
