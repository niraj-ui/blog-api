//======================================
// get all modules =====================
//======================================

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var blogSchema=new Schema({
    tittle:{type:String},
    date:{type:Date,default:Date.now},
    description:{type:String},
    author:{type:String},
    
    
});

var Blog=mongoose.model('Blog',blogSchema);


