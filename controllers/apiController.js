var Employee = require('../models/empModel');
var bodyParser = require('body-parser');

module.exports = function (app) {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

 app.get('/api/emps/:Emp', async (req, res) =>{
         try { 
           // service: 'Emp',
          Employee.find({service: req.params.service}, function (err,Employee) {
            if (err)
            throw err;
             res.status(200).json({ Count: Employee.length, Result: Employee });
              }); 
        }catch(e){
          res.status(500).send(e);
        }
     });

 app.get('/api/emps/:id', async (req, res) => {
    try{ 
        Employee.findById({ _id: req.body.id }, function (err) {
            if (err)
            throw err;
            res.send("id's");
              });
             }catch(e){
               res.status(500).send(e);
              }
            });

  app.post('/api/emps', async(req, res)=> {
    try {
           if (req.body.id) {
            Employee.findByIdAndUpdate(req.body.id, function (err) {
                  if (err)
                   throw err;
                 });
                }
               else {
                 const newEmployee = Employee({
                      service: 'Emp',
                      username:req.body.uname,
                      todo: req.body.todo,
                      isDone: req.body.isDone,
                      hasAttachment: req.body.hasAttachment,
                   });
                newEmployee.save(function (err) {
                   if (err)
                    throw err;
                 res.status(200).json({ Result:'success', _id: newEmployee._id });
              });
            }
          }catch(e){
                res.status(500).send(e);
             }
          });
  // delete 
  /*
  app.delete('/api/emps/delete', async (req, res) =>{
  //  const  backup_data =B_Employee();
    try{
                console.log("find id", req.body);
                   if (req.body._id) 
                   {
                     //let todos = await Todos.findByIdAndRemove(req.body._id);
                          let Employee = await Employee.findById(req.body._id);
                          console.log('Employee :>> ', Employee);
                                console.log( "Find data !");
                              
              const  backup_data = await B_Employee.create({
                            username:Employee.username,
                            todo:Employee.todo, 
                            isDone:Employee.isDone,
                            hasAttachment:Employee.hasAttachment });
                      console.log(backup_data);

                    }
                    let Employee = await Employee.findByIdAndRemove(req.body._id);
                                  console.log('Employee:>>',Employee);
                                  console.log('data is deleted !');
                 }
                catch(e)
              {
                res.status(500).send(e);
            } 
         res.status(200).json({backup_data:'Successfully Done', Data:backup_data});
      }); */
}



























