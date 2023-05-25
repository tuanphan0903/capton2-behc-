const cardService = require('../services/card.service');

const cardController = {
   
   postCard: async(req,res) => {
      try{
         console.log(req.body)
         const data = req.body;
         const card = await cardService.postCard(data);
         console.log("card: " + card)
         if(card){
            res.status(200).json({
               message: 'success',
               error: 0,
               card
           })
         }
      }catch(err) {
         res.status(500).json({
            message: `Có lỗi xảy ra! ${err.message}`,
            error: 1,
        })
      }
   }
}

module.exports = cardController;

