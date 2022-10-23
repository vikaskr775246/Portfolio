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
