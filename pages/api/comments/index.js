import prisma from '../../../lib/prisma'
import nc from 'next-connect'
import { upload } from '../../../middleware/commentImageUpload'
export const config = {
  api: {
    bodyParser:false
  },
}

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(upload.single('image'))
  .post(async(req, res) => {
    try {
      await prisma.testimony.create({
        data: {
          customer: req.body.customer,
          message: req.body.message,
          image: req.file.filename
        }
      })
      console.log(req.file)
      res.json({
        message: "Thank you for your feed back"
      })
    } catch (error) {
        console.error(error)
    }
  })
  .get(async (req, res)=>{

    res.json(await prisma.testimony.findMany())
  })
export default handler;

