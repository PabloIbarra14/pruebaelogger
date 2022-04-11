const{Schema,model}=require('mongoose');
const Logs=Schema({
   
    application_id:{
        type:Schema.Types.ObjectId,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    priority:{
        type:String,
        require:true
    },
    path:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    request:{
        type:Schema.Types.Mixed,

    },
    response:{
        type:Schema.Types.Mixed,
        
    }

    

}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    versionKey: false
});

module.exports=model('Logs',Logs);