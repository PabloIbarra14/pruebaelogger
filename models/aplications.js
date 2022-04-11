const{Schema,model}=require('mongoose');


const Aplications=Schema({
    
    name:{
        type:String,
        require:true
    }

}, {
    timestamps: { createdAt: 'created_At', updatedAt: 'updated_At' },
    versionKey: false
});

module.exports=model('Aplications',Aplications);