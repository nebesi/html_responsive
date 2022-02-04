
/* document.addEventListener('mousemove', function move(e) {
  let container = document.querySelector('.container');
  let sp = document.querySelector('span');
  sp.style.width = e.clientX + 'px';
}); */

window.addEventListener('scroll', function() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100,
      mn = document.querySelector('.main'),
      sp = document.querySelector('.span');
      sp.style.width = scrolled + '%';
});

/* const requestURL = 'https://jsonplaceholder.typicode.com/users';


const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);

xhr.onload = () => {
  console.log(JSON.parse(xhr.response)) 
}

xhr.send(); */





/* let r = {
  "id": 1,
  "body": "some comment",
  "postId": 1
};

let json = JSON.stringify(r);

const XHR = new XMLHttpRequest();
const url = 'https://my-json-server.typicode.com/typicode/demo/comments'
xhr.open('POST', url);

xhr.
 */


let xhr = new XMLHttpRequest();

url = "/server.php";

xhr.open("POST", url, true);

setRequestHeader("Content-Type", "application/json");

// когда придёт ответ на наше обращение к серверу, мы его обработаем здесь
xhr.onreadystatechange = function () {
  // если запрос принят и сервер ответил, что всё в порядке
  if (xhr.readyState === 4 && xhr.status === 200) {
    // выводим то, что ответил нам сервер — так мы убедимся, что данные он получил правильно
    result.innerHTML = this.responseText;
  }
};

var data = JSON.stringify({ "name": name.value, "lastname": lastname.value });

xhr.send(data);

