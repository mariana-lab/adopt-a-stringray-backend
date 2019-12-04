const VimDiesel = require("../models/vimdiesel.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.vimdiesel_details = function (req, res, next) {
    VimDiesel.findById(req.params.id, function (err, vimdiesel) {
        if (err) return next(err);
        res.send(vimdiesel);
    })
};

exports.vimdiesels = function (req, res, next) {
    VimDiesel.find({}, function (err, vimdiesels) {
        if (err) return next(err);
        res.send(vimdiesels);
    })
};
exports.vimdiesel_delete = function (req, res) {
    VimDiesel.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
exports.vimdiesel_update = function (req, res) {
    VimDiesel.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, vimdiesel) {
        if (err) return next(err);
        res.send('Vimdiesel '+ vimdiesel.nickname +' udpated. Vimdiesel ' + JSON.stringify({$set: req.body}));
    });
};

exports.vimdiesel_create = function(req, res, next) {
  let vimdiesel = new VimDiesel({
    name: req.body.name,
    nickname: req.body.nickname,
    img: req.body.img,
    pitch: req.body.pitch,
    description: req.body.description,
    stringrays: req.body.stringrays
  });

  vimdiesel.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("VIMdiesel Created successfully");
  });
};

exports.vimdiesel_create_many = function(req, res, next) {
    req.body.forEach(vimdiesel => {
        let vimdieselToSave = new VimDiesel({
            name: vimdiesel.name,
            nickname: vimdiesel.nickname,
            img: vimdiesel.img,
            pitch: vimdiesel.pitch,
            description: vimdiesel.description,
            stringrays: vimdiesel.stringrays
          });
        
          vimdieselToSave.save(function(err) {
            if (err) {
              return next(err);
            }
          });
    });
    res.send("VIMdiesels Created successfully");
    
  };
