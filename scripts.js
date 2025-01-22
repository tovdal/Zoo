// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('nav ul li a');
//     const offset = 100; // Adjust this value to set the offset

//     for (const link of links) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             window.scrollTo({
//                 top: targetElement.offsetTop - offset,
//                 behavior: 'smooth'
//             });
//         });
//     }
// });