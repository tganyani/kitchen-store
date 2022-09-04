import prisma from '../../../lib/prisma'
import nc from 'next-connect'
import { upload } from '../../../middleware/productImageUpload'
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
      const product = await prisma.product.create({
        data: {
          cost: Number(req.body.cost),
          image: req.file.filename
        }
      })
      console.log(product)
      res.json({
        message: "Product created successfully"
      })
    } catch (error) {
        console.error(error)
    }
  })
  .get(async (req, res)=>{

    res.json(await prisma.product.findMany())
  })
export default handler;

