const addbutton=document.querySelector("#add");
const updateLSData = ()=>{
    const textareadata = document.querySelectorAll('textarea');
    const notes = [];

    textareadata.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes)
    localStorage.setItem('notes',JSON.stringify(notes));
}
const addnewnote = (text = '') => {
    const  note = document.createElement('div');
    note.classList.add('note');

    const htmlData=`
    <div class="opertion">
        <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-regular fa-trash"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class=" ${text ? "hidden" : ""}"></textarea>`;
note.insertAdjacentHTML('afterbegin',htmlData);
//console.log(note);

// getting the references
const editbutton = note.querySelector('.edit');
const delbutton = note.querySelector('.delete');
const maindiv = note.querySelector('.main');
const textarea = note.querySelector('textarea');

// deleting the node
delbutton.addEventListener('click',() =>{
    note.remove();
    updateLSData();
} )

//toggle using edit button
textarea.value = text;
maindiv.innerHTML =text;


editbutton.addEventListener('click',() => {
    maindiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
})

textarea.addEventListener('change',() => {
    const value = event.target.value;
    console.log(value);

    updateLSData();
})

document.body.appendChild(note);
}
//getting data back from local storage
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note) => addnewnote(note));
}
addbutton.addEventListener('click',() => addnewnote());
