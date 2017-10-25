//======================================
// Get all module ======================
//======================================


var express=require('express');
var mongoose=require('mongoose');
var Blog=mongoose.model('Blog');
var blogRouter=express.Router();


module.exports.Controller=function(app){
    // create blog 
    blogRouter.post('/create',function(req,res){
       var blog=new Blog();
                blog.tittle=req.body.tittle,
                blog.description=req.body.description,
                blog.author=req.body.author
            
        blog.save(function(err,status){
            if(err){console.log(err)}
            else{res.send(status)}
            
        });
        
        
    
    });
   
    //  show all blog 
    blogRouter.get('/all',function(req, res){
       Blog.find({}, function(err, status){
           if(err){console.log(err);}
           else{res.send(status)}
       }) 
    });
    
    // show single blog
    blogRouter.get('/:id/single',function(req,res){
        Blog.findById(req.params.id, function(err,status){
            if(err){console.log(err)}
            else{res.send(status)}
            
        });
    });
    
    
    
    //  update in monogDB
    blogRouter.put('/:id/update', function(req,res){
        Blog.findById(req.params.id,function(err,status){
              
                        console.log(req.body.tittle);

                status.tittle=req.body.tittle,                    
                status.description=req.body.description,
                status.author=req.body.author
                // for save in db
                status.save(function(err){
                    if(err){console.log(err)}
                    else{res.send(status)}
                });
                
        });
        
    });
        //  delete in DB 
        
        blogRouter.post('/:id/delete', function(req,res){ 
            console.log(req.params.id);

            Blog.findById(req.params.id, function(err,status){
                status.remove(function(err){
                    if(err){console.log(err);}
                    else{
                        console.log('removed tag');
                        res.send(status)}
                })
            });
        });
        
        
    
    
    
    
    
    
    app.use('/blog', blogRouter)
};


