function showHidePassword () {
    let eyeClosed = document.querySelector("#eye-button").classList.contains("closed");

    if(eyeClosed == true) {
        document.querySelector("#eye-button").src = "src/images/opened-eye.svg";

        document.querySelector("#eye-button").classList.remove("closed");

        document.querySelector("#password").type = "text";
    } else {
        document.querySelector("#eye-button").classList.add("closed");

        document.querySelector("#eye-button").src = "src/images/closed-eye.svg";

        document.querySelector("#password").type = "password";
    }
}