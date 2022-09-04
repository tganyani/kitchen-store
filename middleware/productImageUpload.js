const multer = require('multer')


const fileStorage = multer.diskStorage({
    destination: (request,
        file,
        callback) => {
        const uploadFolder = './public'
        callback(null, uploadFolder)
    },
    filename: (req,
        file,
        callback) => {
        callback(null, `/product-images/${Date.now()}-${file.originalname}`)
    }
})

export const upload = multer({
    storage: fileStorage
})
