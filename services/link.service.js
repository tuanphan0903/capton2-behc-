const linkModel = require('../models/link.model')
const inforModel = require('../models/information.model')
const linkService = {
   getById: async (link) => {
      return await linkModel.findOne({linkName: link})
   },
   getByIdFromLink:async(id) => {
      return await inforModel.findOne({informationId: id})
     }
}

module.exports =  linkService