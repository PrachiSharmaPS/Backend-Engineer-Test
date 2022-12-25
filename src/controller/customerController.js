
const customerModel = require('../model/customerModel')
var uuid = require('uuid-random')
const { isValidEmail, isValidName, isValidMobile, isValidDate } = require("../validator/validation")


//---------------------------------Create Customer-----------------------------------
const createCustomer= async function (req, res) {
    try{
    let data = req.body
    let{firstName,lastName,emailID,mobileNumber,DOB,address,status}=data
    if(!firstName){ return res.status(400).send({status:false,msg :"firstName is required"})}
    if(!lastName){return res.status(400).send({status:false,msg :"lastName is required"})}
    if(!emailID){return res.status(400).send({status:false,msg :"emailID is required"})}
    if(!mobileNumber){return res.status(400).send({status:false,msg :"mobileNumber is required"})}
    if(!DOB){ return res.status(400).send({status:false,msg :"DOB is required"})}
    if(!address){ return res.status(400).send({status:false,msg :"address is required"})}
 //-------------- verifying validation
   if (!isValidName(firstName)) { return res.status(400).send({ status: false, message: "firstName is not valid" }) }
   if (!isValidName(lastName)) { return res.status(400).send({ status: false, message: "lastName is not valid" }) }
   if (!isValidEmail(emailID)) { return res.status(400).send({ status: false, message: "email is not valid" }) }
   if (!isValidDate(DOB)) { return res.status(400).send({ status: false, message: "DOB is not valid" }) }
   if (status!="ACTIVE"&&status!="INACTIVE") { return res.status(400).send({ status: false, message: "status should be Active aur in active" }) }
   if (!isValidMobile(mobileNumber)) { return res.status(400).send({ status: false, message: "mobileNumber is not valid" }) }
//------checking for unique value
    const emailid= await customerModel.findOne({emailID:emailID})
        if(emailid){return res.status(400).send({status:false, msg:"Email is already exists"})}
    const number= await customerModel.findOne({mobileNumber:mobileNumber})
        if(number){return res.status(400).send({status:false, msg:"mobileNumber is already exists"})}
//----------------------------
const generateUUID = uuid();
data["customerID"] = generateUUID

    const customerData = await customerModel.create(data)
    return res.status(201).send({status:true,data: customerData})
    }
    catch(err) {
        console.log("this is error:",err.message)
       return res.status(500).send({status:false,msg:err})
    }
}
//--------------------------------- get  Customer -----------------------------------
const getCustomer = async function ( req,res){
 try{
  const fetchDetails = await customerModel.find({status:"ACTIVE"})

        if(fetchDetails.length == 0){return res.status(400).send({status : false, message : "No data exist"})}
        return res.status(200).send({status : true , message : "customer Details", data : fetchDetails})

    }
    catch(error){
        return res.status(500).send({message : error.message})

    }
}
//---------------------------------delete Customer-----------------------------------
const deleteCustomer = async function ( req,res){
    try{
      const customerID = req.params.customerID
      
       if(!uuid.test(customerID)){
        return res.status(400).send({status : false, message : "customerID is not valid"})
       }
       const fetchDetails = await customerModel.findOneAndUpdate({customerID:customerID},{$set:{status:"INACTIVE"}},{new:true})
       if(!fetchDetails){return res.status(400).send({status : false, message : "No data exist"})}
        return res.status(200).send({status : true , message : "customer Deleted Succesfull"})

    }
    catch(error){
        return res.status(500).send({message : error.message})

    }
}

module.exports={createCustomer,getCustomer,deleteCustomer}
