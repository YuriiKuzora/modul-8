// const book = {
//   title: 'The Last Kingdom',
//   coverImage:
//     '<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>',
// };

// const {
//   title,
//   coverImage:
//     bookCoverImage = '<https://via.placeholder.com/640/480>',
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(bookCoverImage); // "<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>"

//! ===============================

// const book = {
//   title: 'The Dream of a Ridiculous Man',
// };

// const {
//   title,
//   coverImage:
//     bookCoverImage = '<https://via.placeholder.com/640/480>',
// } = book;

// console.log(title); // "The Dream of a Ridiculous Man"
// console.log(bookCoverImage); // "<https://via.placeholder.com/640/480>"

//! ===============================

// // ✅ Все зрозуміло
// doStuffWithBook({
//   title: 'The Last Kingdom',
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// // function doStuffWithBook(book) {
// //   const { title, pages, downloads, rating, isPublic } = book;
// //   console.log(title);
// //   console.log(pages);
// // }

// function doStuffWithBook({
//   title,
//   pages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(pages);
// }

//! ===============================

// const color = [230, 255, 100];

// // const [red, green, blue, ] = color;
// const [red, green, blue, alfa = 0.3] = color;

// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(230, 212, 100)"
// console.log(`rgba(${red}, ${green}, ${blue}, ${alfa})`);
