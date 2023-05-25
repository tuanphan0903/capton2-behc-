const themeModel = require('../models/theme.model');

const themeService = {
   getAllTheme: async() => {
      return themeModel.find();
   },
   createTheme: async({color, background, box, border}) => {
      const newTheme = new themeModel({
         color, background, box, border
          })
      return await newTheme.save()
  },
//    postTheme: async(data) => {
//       return await themeModel.create({
//          themeName: data.themeName,
//          theme: {
//             url: data.url,
//             publicId: data.publicId
//          }
//       })
//    },
//    updateTheme: async (id, { theme }) => {
//       return await themeModel.findByIdAndUpdate(id, { theme: theme }, {new: true})
//   },

//    getById: async(id) => {
//       return await themeModel.findById(id)
//   },
}

module.exports = themeService;