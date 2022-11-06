function querySelector(value, parent = document) {
    return parent.querySelector(`${value}`);
};
// nav scroll event start
const nav_1 = querySelector('#nav_1');
window.onscroll = (e) => {
    const y = Math.floor(pageYOffset);
    if (y > 70) {
        nav_1.classList.add('active');
    } else {
        nav_1.classList.remove('active');
    }
}
// nav scroll event end
// protfolio start
// portfolio section inductor start
const inductor = document.querySelector('.inductor');
const li = document.querySelectorAll('.work-wapper>li');
findSize(li[0]);
li.forEach((elm, idx) => {
    elm.onclick = () => {
        for (const clasRemove of li) {
            clasRemove.classList.remove('active');
        }
        elm.classList.add('active');
        findSize(elm);
    }
});
function findSize(elm) {
    const { width, height, left } = elm.getBoundingClientRect();
    inductor.style.width = (width - 4) + 'px';
    inductor.style.height = height + 'px';
    inductor.style.left = left + 'px';
    console.log(elm.getBoundingClientRect())
    if (innerWidth < 568 && li[3].classList.contains('active')) {
        inductor.style.top = '215px';
    } else if (innerWidth < 568) {
        inductor.style.top = '151px';
    }
}
// portfolio section inductor end
// protfolio buttons validate start
const dataCol = document.querySelectorAll('a[data-col]');
let portfolioCard = document.querySelectorAll('.portfolio-card');
dataCol.forEach(elm => {
    elm.addEventListener('click', (e) => {
        e.preventDefault();
        let Attr = e.target.getAttribute('data-col')
        let AttrLen = Attr.split(' ');
        isCard('none')
        if (Attr == "all") {
            isCard('block');
        } else if (AttrLen.length == 1) {
            isCardDisplay('block', Attr)
        } else {
            isCard('none')
            isCardDisplay('block', Attr)
        }
    });
});
const isCard = (Val, elm = portfolioCard) => {
    for (const item of elm) {
        item.style.display = `${Val}`;
    }
}
const isCardDisplay = (displayVal, Attr, elm = portfolioCard) => {
    portfolioCard.forEach(elm => {
        let dataName = elm.getAttribute('data-name')
        if (dataName == Attr) {
            for (const item of [elm]) {
                item.style.display = `${displayVal}`
            }
        }
    });

}
// protfolio buttons validate end
// protfolio end
//about event start
const full_Name = querySelector('#full_Name');
const email = querySelector('#email');
const subject = querySelector('#subject');
const massage = querySelector('#massage');

const about_mouse = () => {
    const nav_1 = querySelector('#nav_1');
    const about_img = querySelector('#about-img');
    about_img.onmouseenter = () => {
        about_img.children[0].classList.add('active');
    };
    about_img.onmouseleave = () => {
        about_img.children[0].classList.remove('active');
    };
}
about_mouse();
//about event end

const SubmitEvent = () => {
    Email.send({
        SecureToken: '9acd081f-bada-471c-a40c-167d8311c6ba',
        To: "vikashkr775246@gmail.com",
        From: "vikashkr775246@gmail.com",
        Subject: subject.value,
        Body: 'Name: ' + full_Name.value + '<br> Email: ' + email.value + '<br> Massage: ' + massage.value
    }).then(
        msg => alert('Message Successfully Sent')
    ).catch(error => console.log(error));
}
