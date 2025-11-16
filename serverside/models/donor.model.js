import mongoose from 'mongoose'
const donorSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    place:{type:String},
    phonenumber:{type:Number},
    bloodgroup:{type:String}

})
export default mongoose.model.donor || mongoose.model('donor',donorSchema)