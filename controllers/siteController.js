


const getSites = async (req, res) => {
    res.json({ info:"All site information retrived",user:req.user})

};

const getSite = async (req, res) => {
    res.json({ info:`${req.params.id}--site information retrived....................`,user:req.user})

};




module.exports = {
    getSites,getSite
  };