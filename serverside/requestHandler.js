import donorSchema from './models/donor.model.js'
export async function getDonors(req,res){
    try{
      const donors=await donorSchema.find()
    //   console.log(donors);
      
   return res.status(200).json({donors,msg:"All donors successfully retreived"})
   }catch(error){
      return res.status(500).send('internal server error')
   }
}

export async function addDonors(req,res){
    try{
        // console.log('Add donor');
        const {...donor}=req.body
        // console.log({...donor});
        
        const data=await donorSchema.create({...donor})
        // console.log(data);
         
    return res.status(201).json({msg:'Data added successfully'})
    }
    catch(error){
        console.log(error);
        
        return res.status(500).send('Internal Server Error')
    }
}

export async function getDonor(req,res){
    console.log('data');
    
    try{
        const _id=req.params.id
        console.log(_id);
        
        const donor=await donorSchema.findOne({_id})
         return res.status(200).json({msg:'donor retreived',donor})
    }
    catch(error){
        console.log(error);
        
         return res.status(500).send('Internal Server Error')
    }
}

export async function editDonor(req,res){
    try{
        const _id=req.params.id
        const {...donor}=req.body
        const data=await donorSchema.updateOne({_id},{$set:{...donor}})
         return res.status(200).json({msg:'donor updated',donor})
    }
    catch(error){
        console.log(error);
        
         return res.status(500).send('Internal Server Error')
    }
}

export async function deleteDonor(req,res){
   try{
      const _id=req.params.id
      console.log(_id);
      const data=await donorSchema.deleteOne({_id})
      console.log(data);
      
      return res.status(200).json({msg:'Donor deleted'})
   }
   catch(error){
      return res.status(500).send('internal server error')
   }
}
export async function searchDonor(req,res){
    try{
        const search1=req.params.search
        console.log(search1);
        
        const data=await donorSchema.find()
         return res.status(200).json({donors,msg:"All donors successfully retreived"})
   }catch(error){
      return res.status(500).send('internal server error')
   
    }
}
export async function selectDonor(req,res){
    try{
        const select=req.params.select
        console.log(select);
        
        const data=await donorSchema.find()
         return res.status(200).json({donors,msg:"All donors successfully retreived"})
   }catch(error){
      return res.status(500).send('internal server error')
   
    }
}



