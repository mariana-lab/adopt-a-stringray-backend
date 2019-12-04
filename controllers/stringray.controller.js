const StringRay = require("../models/stringray.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.stringray_details = function (req, res, next) {
    StringRay.findById(req.params.id, function (err, stringray) {
        if (err) return next(err);
        res.send(stringray);
    })
};
exports.stringrays = function (req, res, next) {
    StringRay.find({}, function (err, stringrays) {
        if (err) return next(err);
        res.send(stringrays);
    })
};


exports.stringray_update = function (req, res) {
    StringRay.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, stringray) {
        if (err) return next(err);
        res.send('Stringray '+ stringray.nickname +' udpated. Vimdiesel' + req.params);
    });
};
exports.stringray_delete = function (req, res) {
    StringRay.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.stringray_create = function(req, res, next) {
  let stringray = new StringRay({
    name: req.body.name,
    nickname: req.body.nickname,
    img: req.body.img,
    pitch: req.body.pitch,
    description: req.body.description,
    orphan: req.body.orphan,
    vimdiesel: req.body.vimdiesel
  });

  stringray.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("STRINGray Created successfully");
  });
};

exports.stringray_create_many = function(req, res, next) {
    req.body.forEach(stringray => {
        let stringrayToSave = new StringRay({
            name: stringray.name,
            nickname: stringray.nickname,
            img: stringray.img,
            pitch: stringray.pitch,
            description: stringray.description,
            orphan: stringray.orphan,
            vimdiesel: stringray.vimdiesel
          });
        
            stringrayToSave.save(function(err) {
            if (err) {
              return next(err);
            }
          });
    });
    res.send("Stringrays Created successfully");
    
  };
