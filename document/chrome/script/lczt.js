var imgDom = document.getElementsByTagName("img")[0]
var accountDom = document.getElementsByTagName("input")[0]
var password = document.getElementsByTagName("input")[1]
var codeDom = document.getElementsByTagName("input")[2]
var submitDom = document.getElementsByTagName("button")[0]


accountDom.value = '30083'
password.value = 'rdc-78963'

accountDom.dispatchEvent(new Event('input'))
password.dispatchEvent(new Event('input'))

imgDom.onload = function () {
    var image = imgDom.currentSrc
    let data = {
        "image": image
    }
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://172.21.53.53:10086/juejin/ocr', true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            codeDom.value = xmlhttp.response
            codeDom.dispatchEvent(new Event('input'));
            // submitDom.click()
        } else if (xmlhttp.readyState == 4 && xmlhttp.status == 500) {
            let event = new Event('click', { "bubbles": true, "cancelable": true });
            imgDom.dispatchEvent(event);
        }

    }
}




