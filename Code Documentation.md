The BookWise Library Management System is a web application that allows users to manage and browse a collection of books. The system consists of several files: `login.html`, `style2.css`, `script2.css`, `index.html`, `style.css`, and `script.css`. In this document, we will provide a detailed explanation of the code in each file.

## login.html

The `login.html` file contains the login page of the application. It provides a simple form for users to enter their credentials and log in to the system. The form consists of an input field for the username and password, as well as a submit button. When the user clicks the submit button, the login credentials are verified using JavaScript.

## style2.css

The `style2.css` file contains the CSS styles specific to the login page. It defines the appearance of the login form, including the background color, font styles, and layout.

## script2.css

The `script2.css` file contains JavaScript code that handles the login functionality. It listens for the form submission event and retrieves the entered username and password. It then performs a validation check against a predefined set of credentials. If the credentials are correct, the user is redirected to the homepage (`index.html`). Otherwise, an error message is displayed.

## index.html

The `index.html` file represents the homepage of the BookWise application. It displays a list of books, allows filtering and pagination, and provides the option to lend books. The layout consists of a header section, a book list section, a filter section, and a lent books section.

## style.css

The `style.css` file contains the CSS styles for the homepage. It defines the overall layout, colors, and typography of the page. It also includes styles for the book list, filter section, and lent books section.

## script.css

The `script.css` file contains JavaScript code that handles the dynamic behavior of the homepage. It listens for events such as the page load, filter button clicks, and lending actions. It retrieves user input, filters the book list based on the entered criteria, and renders the filtered books on the page. It also handles the pagination functionality, allowing the user to navigate through the book list. Additionally, it manages the lent books functionality, adding lent books to a separate list and rendering them on the page.

The script also includes event listeners for logout functionality. When the user clicks the logout button, the script clears the logged-in user from session storage and redirects the user back to the login page (`login.html`).

In summary, the BookWise Library Management System consists of HTML, CSS, and JavaScript code across multiple files. The `login.html` file handles the login page, `style2.css` and `script2.css` contain styles and JavaScript for the login functionality, `index.html` and `style.css` define the structure and styles for the homepage, and `script.css` handles the dynamic behavior of the homepage, including filtering, pagination, and lending functionality. By combining these files, the BookWise system provides a user-friendly interface for managing and browsing a collection of books.
