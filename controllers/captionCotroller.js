class CaptionController{
    static async addCaption(req,res){
        try {
            const {prompt,tone,platform} = req.body;
            const caption = await Caption.create({prompt,tone,platform});
            res.status(201).json(caption);
            
        } catch (error) {
            console.log(error);
        }
    }
}