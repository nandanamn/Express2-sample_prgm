
const express = require('express');
const app = express();
const port = 3500;

const data = [
  { id: 1, name: 'Arun', class: 'plus one', stream:'science',mark:'90',grade:'A plus' },
  { id: 2, name: 'Amal', class: 'plus one' ,stream:'science',mark:'60',grade:'B plus'},
  { id: 3, name: 'Ajith', class: 'plus one' ,stream:'commerce',mark:'80',grade:'A grade'},
  { id: 4, name: 'Angitha', class: 'plus one' ,stream:'Computer Science',mark:'80',grade:'A grade'},
  { id: 5, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 6, name: 'Arjun', class: 'plus one' ,stream:'Commerce',mark:'98',grade:'A plus'},
  { id: 7, name: 'Archana', class: 'plus one' ,stream:'Science',mark:'98',grade:'A plus'},
  { id: 8, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 9, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 10, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 11, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 5, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 5, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 5, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 5, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 5, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 5, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 5, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},
  { id: 5, name: 'Anandu', class: 'plus one' ,stream:'Humanitites',mark:'98',grade:'A plus'},




  // Add more sample data items as needed
];

app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.set('views',__dirname+'/public');
// router.get('/',(req,res)=>{
//   var data = {title:'student data',student_data:[
//     {
//       name:'Arun',
//       class:'plus one',
//       stream:'science',
//       mark:90,
//       grade:'A plus'
//   },
//   {
//       name:'Amal',
//       class:'plus one',
//       stream:'science',
//       mark:60,
//       grade:'B plus'
//   },
//   {
//       name:'Ajay',
//       class:'plus one',
//       stream:'science',
//       mark:99,
//       grade:'A plus'
//   },
//   {
//       name:'gop',
//       class:'plus one',
//       stream:'science',
//       mark:80,
//       grade:'A grade'
//   },
//   {
//       name:'Achu',
//       class:'plus one',
//       stream:'commerce',
//       mark:90,
//       grade:'A plus'
//   },
//   {
//       name:'Angitha',
//       class:'plus one',
//       stream:'Humanities',
//       mark:70,
//       grade:'A grade'
//   },
//   {
//       name:'Amal Das',
//       class:'plus one',
//       stream:'Computer science',
//       mark:90,
//       grade:'A plus'
//   },
//   {
//       name:'Arun',
//       class:'plus one',
//       stream:'science',
//       mark:90,
//       grade:'A plus'
//   },
//   {
//       name:'varun',
//       class:'plus one',
//       stream:'science',
//       mark:90,
//       grade:'A plus'
//   },
//   {
//       name:'Arun',
//       class:'plus one',
//       stream:'science',
//       mark:90,
//       grade:'A plus'
//   }
//   ]

// }
// res.render('index',data);
// });
// app.use(express.static(__dirname+'/Public'));
// app.use('/',router);
// app.listen(port,()=>console.log('server is running'))

app.get('/', (req, res) => {
  res.render('index', { data: data });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// ...

app.get('/edit/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = data.find(item => item.id === itemId);
    res.render('edit', { item: item });
  });
  
  app.put('/edit/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    // Update the item with the new data
    const updatedItem = req.body;
    const index = data.findIndex(item => item.id === itemId);
    if (index !== -1) {
      data[index] = { id: itemId, ...updatedItem };
    }
    res.sendStatus(200);
  });
  
  app.delete('/delete/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    // Delete the item with the specified ID
    const index = data.findIndex(item => item.id === itemId);
    if (index !== -1) {
      data.splice(index, 1);
    }
    res.sendStatus(204);
  });
  
  // ...
  