// * Request handler logic
const Create = require('../../models/create');

async function makePost(req, res){
    try{
        console.log('controller functions, functioning');
        const letPost = await Create.makePost(req.body);
        console.log(letPost);
        res.json(letPost);
        
    }catch(error){
        console.log(error);
        res.status(400).json(error)
    };
};

module.exports = {
    makePost
}