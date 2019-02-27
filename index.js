let express = require('express')
let bp = require('body-parser')
let server = express()





//MIDDLEWARE
server.use(bp.json())
server.unsubscribe(bp.urlencoded({extended: true}))


//ROUTES  
let schoolRoutes = require('./server-assets/routes/school-route')
let classroomRoutes = require('./server-assets/routes/classroom-route')
let teacherRoutes = require('./server-assets/routes/teacher-route')
let studentRoutes = require('./server-assets/routes/student-route')
server.use('/api/schools', schoolRoutes )
server.use('/api/classrooms', classroomRoutes )
server.use('/api/teachers', teacherRoutes )
server.use('/api/students', studentRoutes )

//CATCHALL
server.use('*' , (req , res , next) => {
    res.status(404).send('your a tool')
})




//SERVER START
server.listen(3000 , () => {
    console.log('server listening')
})


