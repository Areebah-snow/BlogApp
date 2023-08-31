const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const { render } = require('ejs')
const app = express()

//register view engine

app.set('view engine', 'ejs');





mongoose.connect(dbURL) 
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err))


//middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))



app.get('/', (req,res)=>{
 res.redirect('/blogs')
})

app.get('/about', (req,res)=>{
   res.render('about',{ title: 'About'})
})


//blog-routes

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
         res.render('index',{ title: 'All Blogs', blogs: result })
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/blogs',(req,res)=>{
  
    const blog = new Blog(req.body)

    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findbyId(id)
    .thn(result =>{
        render('details', { blog: result, title: 'Blog details' });
    })
    .catch(err =>{
       console.log(err) 
    })
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{ title: 'New Blog'})
})

app.use((req,res)=>{
    res.status(404).render('404', { title: '404'})
})



 

