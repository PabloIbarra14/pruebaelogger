const{Schema,model}=require('mongoose');
const Authorizations=Schema({
   
    application_id:{
        type:Schema.Types.ObjectId,
        require:true
    },
    token:{
        type:String,
        require:true
    }


}, {
    timestamps: { createdAt: 'created_At', updatedAt: 'updated_At' },
    versionKey: false
});

module.exports=model('Authorizations',Authorizations);