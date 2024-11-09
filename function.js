console.log('Server running on port 3000');
var holder = document.getElementsByClassName('holder')[0];  

var BookBtn = document.getElementById('ButtonBook')
BookBtn.addEventListener("click", addBook);


function addBook() {
    var popUp = document.getElementById("popUp");
    popUp.style.display = "flex";

}
var submitBook = document.getElementById('submitBook');
submitBook.addEventListener("click", function(event) {
    event.preventDefault();  
    submitBookfun();        
});
function submitBookfun() {
    var title = document.forms['myForm']['title'].value;
    var author = document.forms['myForm']['author'].value;
    var page = document.forms['myForm']['page'].value;
    var read = document.forms['myForm']['read'].checked;
    popUp.style.display = "none";
    var newBook = {title: title, author: author, page: page, read: read};
    addBlock(newBook.title, newBook.author, newBook.page, newBook.read);

 
}

function addBlock(titley, authory, pagey, read) {
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');
    var button = document.createElement('button');
    var button2 = document.createElement('button');
    button.className = "buttonCheck";
    h1.textContent = titley;
    h2.textContent = authory;
    h3.textContent = pagey;
    button2.textContent = "Remove";
    button2.className = "buttonRemove";
    if (read == true) { button.innerHTML = "Read" } else { button.innerHTML = "Not Read"; button.style.backgroundColor = "red"; };
    holder.append(div);
    div.append(h1);     
    div.append(h2);
    div.append(h3);
    div.append(button);
    div.append(button2);
}

 holder.addEventListener('click', function(event) {
  if (event.target.className === 'buttonCheck') {
    changeRead(event.target);
  }
    });
function changeRead(button) {
    console.log('Clicked');
    if (button.style.backgroundColor == "green") {button.innerHTML = "Not Read"; button.style.backgroundColor = "red";}
    else { button.innerHTML = "Read"; button.style.backgroundColor = "green"; }}
holder.addEventListener('click', function(event) {
    if (event.target.className === 'buttonRemove'){
        var div = event.target.closest('div');
        removeFun(div)
    }
})
function removeFun(name){
    name.remove();
}