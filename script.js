const searchLinks = document.querySelectorAll('a');
const shoes = document.querySelectorAll('.shoe');

function slideEffect(e) {
    e.preventDefault();

    if (e.target === searchLinks[0]) {
        shoes.forEach((piece) => {
            if (piece.classList.contains('slide-blazer')) {
                piece.classList.remove('slide-blazer', 'slide-air', 'slide-blazer-air');
                piece.classList.add('slide-jordan');
            } else if (piece.classList.contains('slide-blazer-air')) {
                piece.classList.remove('slide-blazer-air');
                piece.classList.add('slide-jordan')
            } else if (piece.classList.contains('slide-air')) {
                piece.classList.remove('slide-air')
                piece.classList.add('slide-jordan')
            }

            piece.classList.remove('slide-blazer-air', 'slide-hippie')
        })
    } else if (e.target === searchLinks[1]) {
        shoes.forEach((piece) => {
            piece.classList.remove('slide-jordan', 'slide-air-hippie');
            piece.classList.add('slide-blazer');

            if (piece.classList.contains('slide-air')) {
                piece.classList.remove('slide-air', 'slide-blazer')
                piece.classList.add('slide-blazer-air')
            } else if (piece.classList.contains('slide-air-hippie')) {
                piece.classList.remove('slide-air-hippie');
                piece.classList.add('slide-blazer-air');
            }
        })
    } else if (e.target === searchLinks[2]) {
        shoes.forEach((piece) => {
            piece.classList.add('slide-air');
            if (piece.classList.contains('slide-blazer-air')) {
                piece.classList.remove('slide-blazer-air')
            } else if (piece.classList.contains('slide-hippie')) {
                piece.classList.remove('slide-hippie');
                piece.classList.add('slide-air-hippie')
            }
        })
    } else if (e.target === searchLinks[3]) {
        shoes.forEach((piece) => {
            piece.classList.add('slide-hippie');

            if (piece.classList.contains('slide-blazer', 'slide-air-hippie')) {
                piece.classList.remove('slide-blazer', 'slide-air-hippie');
                piece.classList.add('slide-hippie')
            }
            // else if (piece.classList.contains('slide-air-hippie',)) {
            //     piece.classList.remove('slide-air-hippie');
            //     piece.classList.add('slide-hippie');
            // }
        })
    }
}

searchLinks.forEach((link) => {
    link.addEventListener('click', slideEffect);
})

// const searchLinks = document.querySelectorAll('a');
// const shoes = document.querySelectorAll('.shoe');

// function slideEffect(e) {
//     e.preventDefault();

//     const targetIndex = Array.from(searchLinks).indexOf(e.target);

//     shoes.forEach((piece) => {
//         piece.classList.remove('slide-jordan', 'slide-blazer', 'slide-air');

//         if (targetIndex === 0 && piece.classList.contains('slide-blazer')) {
//             piece.classList.add('slide-jordan');
//         } else if (targetIndex === 1) {
//             piece.classList.add('slide-blazer');
//         } else if (targetIndex === 2) {
//             piece.classList.add('slide-air');
//         }
//     });
// }

// searchLinks.forEach((link) => {y