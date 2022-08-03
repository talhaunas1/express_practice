const express=require('express')

const app = express()
const port = process.env.port || 3300

//middle ware
app.use(express.json())

const courses = [
    { name: 'course 1',id: 1 },
    { name: 'course 2',id: 2 },
    { name: 'course 3',id: 3 }
]

// to get all courses
app.get('/api/courses',(req,res)=>{
    res.send(courses)
})



//to get singlw course
app.get('/api/courses/:id', (req,res) =>{
    //id is parameter
    // const id = req.params.id
     // const courses= course.find((c)=>c.id===parseInt(id))
    const course = courses.find(c => c.id === parseInt(req.params.id))
   if(!course) res.status (404).send('the course with the given id Was not found')
    // 404 
    res.send(course)
})

app.post('/api/courses',(req,res)=>{
    const course = {
        name:req.body.name,
        id:courses.length+1
    }
    courses.push(course)
    res.send(course)
})


app.listen(port , () => console.log(`listing on ${port} `))