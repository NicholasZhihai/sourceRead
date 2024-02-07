window.onload = function () {
    var accountDom = document.getElementsByTagName("input")[0]
    var password = document.getElementsByTagName("input")[1]
    var submitDom = document.getElementsByTagName("button")[0]

    accountDom.value = '30083'
    password.value = '30083'

    accountDom.dispatchEvent(new Event('input'))
    password.dispatchEvent(new Event('input'))
    submitDom.click()
}




