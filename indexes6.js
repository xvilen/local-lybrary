console.log('thus is es 6')
class book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class display {
    add(Book) {
        console.log("gg");
        let tablebody = document.getElementById("tableBody");
        let uistrng = `<tr>
                        <td>${Book.name}</td>
                        <td>${Book.author}</td>
                        <td>${Book.type}</td>
                    </tr>`;
        tablebody.innerHTML += uistrng;
    };
    clear() {
        let libraryform = document.getElementById("libraryForm");

        libraryform.reset();
    };
    validate(Book) {
        if (Book.name.length < 2 || Book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    };
    show(type, displaymessage) {
        let mesage = document.getElementById('message')
        let boldtext;
        if (type == 'success') {
            boldtext = 'success'
        } else {
            boldtext = 'error'
        }
        mesage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldtext}:</strong> ${displaymessage}
                            
                            </div>`
        setTimeout(function() {
            mesage.innerHTML = ``
        }, 2000);
    }
}
let libraryform = document.getElementById("libraryForm");
libraryform.addEventListener("submit", libraryformsubmit);

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