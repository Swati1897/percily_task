var Employee = require('../models/empModel');

module.exports = function(app){
      app.get('/api/setupemps', function(req, res){
         
          const starterEmployee =[
              {
              service: 'Emp',   
              username: 'swati singh',
              address: 'nagpur',
              mobile_no : '2345678970',
              email_id: 'swatisingh@gmail.com'
            },
            {
                service: 'Emp',
                username: 'shilpa singh',
                address: 'nagpur',
                mobile_no : '2345678457',
                email_id: 'shilpasingh@gmail.com'
              },
              {
                service: 'Emp',  
                username: 'suman singh',
                address: 'nagpur',
                mobile_no : '2345678945',
                email_id: 'sumansingh@gmail.com'
              }
            
          ];
          Employee.create(starterEmployee,function (err,results)
          {
              res.send(results);
             });
      });
}
