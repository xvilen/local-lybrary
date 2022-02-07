// console.log("hey");
// // constructer
// function book(name, author, type) {
//     this.name = name;
//     this.author = author;
//     this.type = type;
// }


// let libraryform = document.getElementById("libraryForm");
// libraryform.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let name = document.getElementById("bookName");
//     let authors = document.getElementById("author");
//     let type;
//     let books = localStorage.getItem("books");
//     if (books == null) {
//         bookObj = [];
//     } else {
//         bookObj = JSON.parse(books);
//     }
//     let bookss = {
//         name: name.value,
//         authorr: authors.value,
//         // author: author.value,
//         type: type
//     }
//     if (name.value == "") {} else {

//         bookObj.push(bookss);
//     }
//     localStorage.setItem("books", JSON.stringify(bookObj));
//     name.value = "";
//     author.value = "";
//     console.log(bookObj);


// });
// let libraryform = document.getElementById("libraryForm");
// libraryform.addEventListener("submit", function(e) {
//     let name2 = document.getElementById("bookName");
//     let author2 = document.getElementById("author");
//     let type;

//     let books = localStorage.getItem("book");
//     if (books == null) {
//         bookobj = [];
//     } else {
//         bookobj = JSON.parse(books);
//     }
//     let bookst = {
//         name: name2.value,
//         author: author2.value,
//         type: type,
//     };
//     bookobj.push(bookst);
//     localStorage.setItem('books', JSON.stringify(bookobj))
//     console.log(bookobj)

// });

console.log("hey");
// constructer
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
//display construter
function display() {}
//
display.prototype.add = function(Book) {
    console.log("gg");
    tablebody = document.getElementById("tableBody");
    let books = localStorage.getItem("books");
    if (books == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(books);
    }

    let uistrng = bookObj.forEach(function(element, index) {
        ` <tr>
                    <td > ${ element.name} </td> 
                    <td > ${ element.author} </td> 
                    // <td > ${element.type } </td>
                     </tr>`
    })
    let bookselm = document.getElementById('books');
    if (bookObj.length != 0) {
        tablebody.innerHTML += uistrng
    } else {
        tablebody.innerHTML = `<div class="card my-2 mx-2 notescard bg-dark" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-light">example</h5>
            <p class="card-text text-light">your notes will appear here</p>
            <button id="0" onclick="deletenote(this.id)" class="btn btn-light">Delete note</a>
        </div>
    </div>`
    }
};
// display.prototype.add = function(Book) {
//     console.log("gg");
//     tablebody = document.getElementById("tableBody");
//     let uistrng = `<tr>
//                     <td>${Book.name}</td>
//                     <td>${Book.author}</td>
//                     <td>${Book.type}</td>
//                 </tr>`;
//     tablebody.innerHTML += uistrng;
// };

function shownotes() {
    let books = localStorage.getItem("books");
    if (books == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(books);
    }
    html = ""

    bookObj.forEach(function(element, index) {
        html += ` <tr>
                    <td > ${ element.name} </td> 
                    <td > ${ element.author} </td> 
                    <td > ${element.type } </td>
                     </tr>`
    });

    display.prototype.clear = function() {
        let libraryform = document.getElementById("libraryForm");

        libraryform.reset();
    };
    display.prototype.validate = function(Book) {
        if (Book.name.length < 2 || Book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    };
    display.prototype.show = function(type, displaymessage) {
        let mesage = document.getElementById('message')
        mesage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role = "alert">
                    <strong> message: </strong> ${displaymessage} 
                    <button type = "button" class = "btn-close" data-bs-dismiss="alert" aria-label="Close"> 
                </button> 
                </div>`
        setTimeout(function() {
            mesage.innerHTML = ``
        }, 2000);
    };
    // add submit event to lybraryform

    let libraryform = document.getElementById("libraryForm");
    let submitt = document.getElementById("submit");
    libraryform.addEventListener("submit", libraryformsubmit);
    submitt.addEventListener("click", function(e) {
        e.preventDefault();
        let name = document.getElementById("bookName");
        let authors = document.getElementById("author");
        let type;
        let books = localStorage.getItem("books");
        if (books == null) {
            bookObj = [];
        } else {
            bookObj = JSON.parse(books);
        }
        let bookss = {
            name: name.value,
            authorr: authors.value,
            // author: author.value,
            type: type
        }
        if (name.value == "") {} else {

            bookObj.push(bookss);
        }
        localStorage.setItem("books", JSON.stringify(bookObj));
        name.value = "";
        author.value = "";
        console.log(bookObj);


    });

    function libraryformsubmit(e) {
        console.log("you");
        e.preventDefault();

        let name = document.getElementById("bookName").value;
        let author = document.getElementById("author").value;
        let type;
        // friction programming cooking

        let friction = document.getElementById("fiction");
        let programming = document.getElementById("programming");
        let cooking = document.getElementById("cooking");
        if (fiction.checked) {
            type = fiction.value;
        } else if (programming.checked) {
            type = programming.value;
        } else if (cooking.checked) {
            type = cooking.value;
        }

        let Book = new book(name, author, type);
        console.log(Book);
        let Display = new display();
        if (Display.validate(Book)) {
            Display.add(Book);
            Display.clear();
            Display.show('success', 'your book is added')
        } else {
            //show error
            Display.show('danger', 'sorry you can not add book')

        }
    }
}