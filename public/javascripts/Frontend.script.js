let movingCursor1 = document.querySelector('.cursor1');
let movingCursor2 = document.querySelector('.cursor2');
let addToCarts = document.querySelectorAll('.add-cart');

let li= document.querySelectorAll('li');

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    lerp: 0.05, 
});


function updateCart(menu) {
    axios.post('/update-cart', menu)
        .then(res => {
        })
        .catch(err => {
            console.error(err); // Log error
        });
}

addToCarts.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        try {
            let menu = JSON.parse(btn.dataset.menu);
            updateCart(menu);
        } catch (error) {
            console.error("Error parsing menu data:", error); // Log parsing error
        }
    });
});






