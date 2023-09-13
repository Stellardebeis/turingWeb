// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// alert('hello!');

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

console.log(multiply(4, 7));

function click1()
{
    alert("hello!");
}

// document.querySelector("html").addEventListener("click", click1);





function clickImg()
{
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/入职快乐.jpg')
    {
        myImage.setAttribute('src', 'images/mqm_dog.jpg');
    }
    else
    {
        myImage.setAttribute('src', 'images/入职快乐.jpg');
    }

}

function clickh1()
{
    let myHeading = document.querySelector('h1');
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/入职快乐.jpg')
    {
        myHeading.textContent = 'Hello world222!';
    }
    else
    {
        myHeading.textContent = 'Hello world!';
    }
    console.log(mySrc);

}


let myImage = document.querySelector('img');
let myh1 = document.querySelector('h1');

myh1.onclick = function() {
    clickh1();
}

myImage.onclick = function() {
    clickImg();
}

// myImage.onclick = clickImg();

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt('请输入你的名字。');
    if(!myName)
    {
      setUserName();
    }
    else
    {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }


 var sn='model_name';
 var up=sn.toUpperCase() //sn字符串所有字母转大写字母
 var low=sn.toLowerCase() //sn字符串所有字母转小写字母

 console.log(sn.toUpperCase());
 console.log(sn.toLowerCase());

 document.getElementById("demo").innerHTML=up;

 function cap()
 {
	var input = document.getElementById("name");

    input.value=input.value.toUpperCase();

    // console.log(input.value);
}

//计算字符串长度
function str_code()
{
    input = document.getElementById("InStringLen");
    output = document.getElementById("OuStringLen");
    output.value = input.value.length;
}


//JSON转化
function cover_json()
{
    input = document.getElementById("InJson");
    output20 = document.getElementById("OuJson20");
    output40 = document.getElementById("OuJson40");
    output80 = document.getElementById("OuJson80");
    output160 = document.getElementById("OuJson160");

    Jsontxt = JSON.parse(input.value);

    output20.innerHTML = Jsontxt.HT20;
    output40.innerHTML = Jsontxt.HT40;
    output80.innerHTML = Jsontxt.HT80;
    output160.innerHTML = Jsontxt.HT160;

    console.log(input.value);

    console.log(Jsontxt.HT20);
    console.log(Jsontxt.HT40);
    console.log(Jsontxt.HT80);
    console.log(Jsontxt.HT160);
}