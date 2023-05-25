const generateRandom = () => {
   var length = 10,
       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
       retVal = "";
   for (var i = 0, n = charset.length; i < length; ++i) {
       retVal += charset.charAt(Math.floor(Math.random() * n));
   }
   return retVal;
 }

 module.exports = { generateRandom };