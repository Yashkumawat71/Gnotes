
const notebtn = document.querySelector('.notebtn');
const papa = document.querySelector('.papa');

const addNewNote = (text = '') => {



      //updateladat()
     const  updateLSData =()=>{
      const textarea = document.querySelectorAll('textarea');
      const notess = [];

      textarea.forEach((arr)=>{
        return notess.push(arr.value);
      })
       console.log(notess);


       localStorage.setItem('notes',JSON.stringify(notess)) ;   //to set item

     }

  
    const note = document.createElement('div');
    note.classList.add('mainnotes');

    const htmldata = `
    <div class="notes">
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="far fa-trash-alt"></i></button>
    <button class="save"><i class="far fa-save"></i></button>
    </div>

    <div id = "main" class="${text ? "":"hidden"}"> </div> 
    <textarea  id="txtarea" class= "${text ? "hidden":""}" placeholder="Add Your Memory"></textarea>
    
    <div>
    `
  
    note.insertAdjacentHTML('afterbegin',htmldata);
    console.log(note);

     
     // geeting edit and dele reference 
     const editbtn = note.querySelector('.edit');
     const delbtn = note.querySelector('.delete');
     const main = note.querySelector('#main');
     const txtarea = note.querySelector('textarea');
     const savebtn = note.querySelector('.save');

     // delte note 
     delbtn.addEventListener('click',()=>{
       note.remove();
       updateLSData();
     });

     
      txtarea.addEventListener('change', (event)=>{
      const value = event.target.value;
     
       var newvalue = event.target.value;

      console.log(value);
      main.innerHTML = value;
      console.log(main);
      console.log(txtarea);

     
       updateLSData();

    });

      txtarea.value = text;
     main.innerHTML = text;
     // toogle using edit btn

     
     editbtn.disabled = true;
      

     
    
      savebtn.addEventListener('click',()=>{
       
        
        
       txtarea.classList.toggle('hidden');
       main.classList.toggle('hidden');
      savebtn.disabled=true;
       editbtn.disabled = false;
       
      });

     
    
    
       
      editbtn.addEventListener('click', ()=>{
      
        
        
      txtarea.classList.toggle('hidden');
      main.classList.toggle('hidden');
      
      
      editbtn.disabled = true;
      savebtn.disabled = false;
      });

      

      
    // document.body.appendChild(note);  //it append node as last child of node

      papa.appendChild(note);
}

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note)=>{ addNewNote(note)})}

notebtn.addEventListener('click',() => {
  addNewNote();
});




