let bookTitle = document.getElementById('bookTitle');
let bookAuthor = document.getElementById('bookAuthor');
let bookStatus = document.getElementById('bookStatus');
let statusButton = document.getElementById('showStatus');

function readingStatusOfBook() {

    let titleBook = bookTitle.value;
    let authorBook = bookAuthor.value;
    let statusBook = bookStatus.value;


    class Book {
        constructor(title, author, readingStatus) {
            this.title = title;
            this.author = author;
            this.readingStatus = readingStatus;
        }

        returnInfo() {
            if (titleBook && authorBook && statusBook != null) {
                if (this.readingStatus == 'yes') {
                    console.log(`Already read '${this.title}' by ${this.author}.`);
                }
                else if (this.readingStatus == 'no') {
                    console.log(`You still need to read '${this.title}' by ${this.author}.`);
                }
                else {
                    alert(`Please write either yes or no.`);
                }
            }

            else {
                alert('Please fill out all of the inputs.');
            }

        }
    }

    let input = new Book(titleBook, authorBook, statusBook);

    input.returnInfo();
}

statusButton.addEventListener('click', readingStatusOfBook);