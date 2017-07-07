
var express = require('express');
var app = express.Router();
var path = require('path');
var connection = require('../models/model.js');


// CALL JS Y CSS FILES //
app.use(express.static('./public'));
app.get("/style.css", function (req, res) {
    res.sendFile(path.join(__dirname + "/../assets/css/style.css"))
});
app.get("/javas.js", function (req, res) {
    res.sendFile(path.join(__dirname + "/../assets/javas/javas.js"));
});
// END OF CALL //


// ACTIONS //
app.get("/", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("empty", { games_data: result });
    })
});

// PAGINATION //
app.get("/page1", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id LIMIT 150", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});
app.get("/page2", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id LIMIT 150 OFFSET 150", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});
app.get("/page3", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id LIMIT 150 OFFSET 300", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});
app.get("/page4", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id LIMIT 150 OFFSET 450", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});
app.get("/page5", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id LIMIT 150 OFFSET 600", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});
app.get("/page6", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id LIMIT 150 OFFSET 750", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});
app.get("/page7", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id LIMIT 150 OFFSET 900", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});
app.get("/page8", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id LIMIT 150 OFFSET 1050", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});
app.get("/page9", function (req, res) {
    connection.query("SELECT * FROM `games_data` order by id LIMIT 150 OFFSET 1200", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});
app.get("/page10", function (req, res) {
    connection.query("SELECT * FROM `games_data` WHERE `id` > 1350 ORDER BY id", function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render("index", { games_data: result });
    })
});

// DELETE //
app.post("/:id", function(req, res) {
    connection.query("DELETE FROM `games_data` WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect("back");
    });
});


// ADD NEW //
app.post("/page:", function(req, res) {
    connection.query("INSERT INTO `games`.`games_data` (`Name`, `Platform`, `Year_of_Release`, `Genre`, `Publisher`, `Developer`, `Rating`) VALUES ('?', '?', '?', '?', '?', '?', '?')", [req.body.name, req.body.platform, req.body.release, req.body.genre, req.body.publisher, req.body.developer, req.body.rating],
        function(err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/');
        });
});


// UPDATE //
app.post("/update", function(req, res) {
    connection.query("UPDATE `games`.`games_data` SET `Name` = ? WHERE `id` = ?", [req.body.name, req.body.id], function(err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/');
        });
});


// SEARCH //
app.post("/search", function(req, res) {
    connection.query("SELECT `Name`, `Platform`, `Year_of_Release`, `Genre`, `Publisher`, `Developer`, `Rating` FROM games_data WHERE Name = ?", [req.body.search], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/');
    });
});

module.exports = app;