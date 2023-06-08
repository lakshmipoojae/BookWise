const books = [{
  title: "it starts with us",

    author:" Colleen Hoover",

    subject: "Romance novel",

    publishDate: "18 October 2022",

    image: "../assets/book.jpg",

    rating: 4

  },{

    title: "The Sacred Well Murders",

    author: "Susan Rowland",

    subject:"Fiction",

    publishDate: "2022",

    image: "../assets/The Sacred Well Murders.jpg",

    rating: 4

  },{

    title: "Big magic",

    author: "Elizabeth Gilbert",

    subject: "Self help book",

    publishDate: "21 August 2015",

    image: "../assets/Big magic.jpg",

    rating: 4

  },{

    title: "Ten thousand skies above you",

    author: "Claudia Gray",

    subject: "Young adult fiction",

    publishDate: "3 November 2015",

    image: "../assets/Ten thousand skies above you.jpg",

    rating: 4

  },{

    title: "the great gatby",

    author:  "F. Scott Fitzgerald",

    subject:  "Historical Fiction",

    publishDate:  "10 April 1925",

    image: "../assets/the great gatby.jpg",

    rating: 4

  },{

    title: "Stay And Fight",

    author: "Madeline fitch",

    subject: "Humor",

    publishDate:"9 July 2019",

    image: "../assets/Stay And Fight.jpg",

    rating: 3

  },{

    title: "afternoon of a faun james lasdun",

    author: "James Lasdun",

    subject:"Thriller",

    publishDate: "9 April 2019",

    image: "../assets/afternoon of a faun james lasdun.jpg",

    rating: 3

  },{

    title: "dominicana angie cruz",

    author: " Angie CruzGenres",

    subject:"Domestic fiction",

    publishDate: "3 September 2019",

    image: "../assets/dominicana angie cruz.jpg",

    rating: 4

  },{

    title: "Flash count Diary",

    author: " Darcey Steinke",

    subject: "Suicide",

    publishDate: "18 June 2019",

    image: "../assets/Flash Count Diary.jpg",

    rating: 3

  },{

    title: "Picnic Comma Lightning",

    author: "Laurence Scott",

    subject: "Digital world",

    publishDate: "2018",

    image: "../assets/Picnic Comma Lightning.jpg",

    rating: 1
  },{

    title: "the travelers regina poter",

    author: "Regina PorterGenres: Historical Fiction",

    subject: "../assets/Historical Fiction",

    publishDate: "2019",

    image: "../assets/the travelers regina poter.jpeg",

    rating: 2

  },{

    title:  "Very nice",

    author:"Marcy Dermansky",

    subject: "Humor",

    publishDate: "2 July 2019",

    image: "../assets/Very Nice.jpg",

    rating: 3

  },{

    title: "Book lovers",

    author:  "Emily Henry",

    subject:"Fiction",

    publishDate: "3 May 2022",

    image: "../assets/Book lovers.jpg",

    rating: 4

  },{

    title: "It Start With Us",

    author: "Colleen Hoover",

    subject: "romance novel",

    publishDate:  "18 October 2022",

    image: "../assets/It Start With Us.jpg",

    rating: 4

  },{

    title: "Ugly Love",

    author:"Colleen Hoover",

    subject: "Romance",

    publishDate: "5 August 2014",

    image: "../assets/Ugly Love.jpg",

    rating: 4

  },{

    title: "Unparalleled",

    author: "D.S.Smith",

    subject: "Mystery",

    publishDate:  "24 July 2018",

    image: "../assets/Unparalleled.jpg",

    rating: 4

  },{

    title: "Feeling lucky",

    author: "Douglas Edwards",

    subject: "positive",

    publishDate: "12 july 2011",

    image: "../assets/Feeling lucky.jpg",

    rating: 3

  },{

    title: "Proud pada",

    author: "S.G.Blaise",

    subject: "Mystery",

    publishDate: "28 November 2022",

    image: "../assets/Proud pada.jpg",

    rating: 4

  },{

    title: "Gone girl",

    author: "Gillian Flynn",

    subject: "Novel",

    publishDate: "24 May 2012",

    image: "../assets/Gone Girl.jpg",

    rating: 4

  },{

    title: "Paradox Effect",

    author: "Gabriel F. W. Koch",

    subject: "Science fiction",

    publishDate: "24 Septembert 2015",

    image: "../assets/Paradox Effect.jpg",

    rating: 4.3

  }
  // Add more book objects here...
];

document.addEventListener('DOMContentLoaded', function() {
  var loggedInUser = sessionStorage.getItem('username');

  if (loggedInUser) {
    // Display welcome message
    document.getElementById('userWelcome').textContent = 'Welcome ' + loggedInUser;
  } else {
    // If not logged in, redirect to the login page
    window.location.href = 'login.html';
  }

  // Logout button click event
  document.getElementById('logoutButton').addEventListener('click', function() {
    // Clear the logged-in user from session storage
    sessionStorage.removeItem('username');

    // Redirect to the login page
    window.location.href = 'login.html';
  });
});

const resultsPerPage = 10;
let currentPage = 1;
let lentBooks = [];

function renderBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  const titleFilter = document.getElementById('titleFilter').value.toLowerCase();
  const authorFilter = document.getElementById('authorFilter').value.toLowerCase();
  const subjectFilter = document.getElementById('subjectFilter').value.toLowerCase();
  const dateFilter = document.getElementById('dateFilter').value.toLowerCase();

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(titleFilter) &&
    book.author.toLowerCase().includes(authorFilter) &&
    book.subject.toLowerCase().includes(subjectFilter) &&
    book.publishDate.toLowerCase().includes(dateFilter)
  );

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  paginatedBooks.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookDiv.appendChild(bookImage);

    const bookDetails = document.createElement('div');
    bookDetails.className = 'book-details';
    bookDetails.innerHTML = `<strong>Title:</strong> ${book.title}<br>
                             <strong>Author:</strong> ${book.author}<br>
                             <strong>Subject:</strong> ${book.subject}<br>
                             <strong>Publish Date:</strong> ${book.publishDate}<br>
                             <strong>Rating:</strong> ${getRatingStars(book.rating)}`;
    bookDiv.appendChild(bookDetails);

    const lendButton = document.createElement('button');
    lendButton.textContent = 'Lend';
    lendButton.className = 'lend-button';
    lendButton.addEventListener('click', () => lendBook(book));
    bookDiv.appendChild(lendButton);

    bookList.appendChild(bookDiv);
  });

  renderPagination(filteredBooks.length);
}

// Find the lent books list containers
const lentBooksList = document.getElementById('lentBooksList');
const lentBooksRightList = document.getElementById('lentBooksRightList');


function renderLentBooks() {
  const lentBooksList = document.getElementById('lentBooksList');
  lentBooksList.innerHTML = '';

  lentBooks.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;
    lentBooksList.appendChild(li);
  });
}

function lendBook(book) {
  lentBooks.push(book);
  renderLentBooks();
}

function renderPagination(totalBooks) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(totalBooks / resultsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.className = i === currentPage ? 'active' : '';

    pageLink.addEventListener('click', () => {
      currentPage = i;
      renderBooks();
    });

    pagination.appendChild(pageLink);
  }
}

function getRatingStars(rating) {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  return `<span class="rating-stars">${stars}</span>`;
}

document.getElementById('filterButton').addEventListener('click', () => {
  currentPage = 1;
  renderBooks();
});

const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');
const bookContainer = document.getElementById('bookContainer');

scrollLeft.addEventListener('click', () => {
  bookContainer.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
});

scrollRight.addEventListener('click', () => {
  bookContainer.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
});
document.getElementById('filterButton').addEventListener('click', () => {
  currentPage = 1;
  renderBooks();

  // Scroll to the Lent Books section
  const lentBooksSection = document.getElementById('lentBooksSection');
  lentBooksSection.scrollIntoView({ behavior: 'smooth' });
});


renderBooks();
renderLentBooks();
