const cardModel = require('../models/card.model');

const cardService = {
   postCard: async(data) => {
      return await cardModel.create({
         cardFullName: data.cardFullName,
         cardFront: {
            urlFront: data.urlFront,
            publicIdFront: data.publicIdFront,
         },
         cardBack: {
            urlBack: data.urlBack,
            publicIdBack: data.publicIdBack
         },
         })
   }
}

module.exports = cardService;