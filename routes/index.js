var express = require('express');
var router = express.Router();
var {db} = require('../database/mysql/mysql');




function result(err,rows){
  if(err) throw err;
  console.log(rows);

}

// db.query(`SELECT * FROM person`,(err,rows,fileds)=>{
//   if(err) throw err;
//   console.log(rows);
// });

// db.query(`CREATE table foo (hobby varchar(255), address varchar(255))`,(err,result)=>{
//   if(err) throw err;
//   console.log(result);
// })

// person 테이블의 모든걸 가져올건대 left join을 쓸거다 foo에서 가져올건대
// person id와 foo id 가 같을떄.


// db.query(`SELECT * from person left join foo on person.id = foo.id`,result);
db.query(`select name as nickname from person`,result); // name을 nickname으로 바꿔서 가져옴.
db.query(`select * from person where age > 20`,result)

// for(let i = 0 ; i < 100; i++){
//   db.query(`INSERT INTO foo (hobby, address) VALUES ('coding${i}','test${i}@te.com') `,result)
// }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Database Server' });
});

module.exports = router;
