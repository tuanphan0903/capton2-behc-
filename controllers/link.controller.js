const linkService = require('../services/link.service');
const inforService = require('../services/infor.service');

const linkController = {
   getLink: async(req,res) => {
      try{
         const link = req.params.id
         const data = await linkService.getById(link);
         const infor = await linkService.getByIdFromLink(data.informationId)
         if(infor) {
            res.status(200).json({
               message: 'success',
               error: 0,
               infor
           })
         } else {
            res.status(404).json({
                message: 'Không tìm thấy!',
                error: 1,
                infor
            })
        } 
      }catch(err){
         res.status(500).json({
            message: `Có lỗi xảy ra! ${err.message}`,
            error: 1,
        })
      }
   },

}

module.exports = linkController