checkCookies();

function checkCookies () {
    if (document.cookie.split(';').some((item) => item.includes('user=true'))) {
       document.write("Welcome back to this desolate website, user.")
    }
}

function clearCookies() {
    document.cookie = ("user=;")
    console.log(document.cookie);
}

function setCookies() {
    document.cookie = ("user=true;")
    console.log(document.cookie);
}