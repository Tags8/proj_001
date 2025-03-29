var addtask = document.querySelector('#addtask');
var form = document.querySelector('#form');

addtask.addEventListener('click', function () { 
    var list = document.getElementById('list');

    var li = document.createElement('li');

    li.innerHTML = form.value;

    list.appendChild(li);
 }, false);


 if (!window.localStorage) {
    console.log("localstorage非対応");
}



//document.querySelector()でDOM要素を取得
//addEventListerner()でクリックイベントを設定
//innerHTMLやappendChild()でタスクをリストに追加