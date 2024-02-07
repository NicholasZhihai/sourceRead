window.onload = function () {
    var accountDom = document.getElementsByTagName("input")[1]
    var password = document.getElementsByTagName("input")[2]
    var submitDom = document.getElementsByTagName("button")[0]

    accountDom.value = 'lzh30083'
    password.value = 'lzh30083'

    accountDom.dispatchEvent(new Event('input'))
    password.dispatchEvent(new Event('input'))
    submitDom.click()
}




