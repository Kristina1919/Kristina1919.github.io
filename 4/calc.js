function calc() {
    let pr = document.getElementsByName("pr");
    let num = document.getElementsByName("num");
    let res = document.getElementById("res");
    let re = /\D/;
    if ((pr[0].value.match(re) || num[0].value.match(re)) === null)
    res.innerHTML = ("И у нас получается: " + parseInt(pr[0].value, 10) * parseInt(num[0].value, 10));
    else res.innerHTML = "Что-то пошло не так...";
    return false;
}
