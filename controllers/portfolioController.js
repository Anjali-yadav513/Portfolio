const Portfolio = require("../models/Portfolio.js");

//show form
exports.getForm = (req,res)=>{
    res.render("form");
};

// create portfolio
exports.createPortfolio = async (req,res)=>{
    const projects = [
        { name: req.body.projectName1, link: req.body.projectLink1 },
        { name: req.body.projectName2, link: req.body.projectLink2 }
    ];

    const newPortfolio = new Portfolio({
        name: req.body.name,
        username: req.body.username,
        title: req.body.title,
        about: req.body.about,
        skills: req.body.skills,projects,
        github: req.body.github,
        linkedin:req.body.linkedin

    });

    await newPortfolio.save();
    res.redirect(`/portfolio/${newPortfolio.username}`);
};

// show portfolio
exports.getPortfolio = async (req,res)=>{
    const data = await Portfolio.findOne({username: req.params.username});
    res.render("portfolio", {data});
};
