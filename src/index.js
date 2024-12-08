window.bootstrap = require("bootstrap/dist/js/bootstrap.min.js");
import $ from "jquery";
import "bootstrap/scss/bootstrap.scss";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './css/index.css';
import "./sass/index.scss";

$(document).ready(function () {

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            $(".nav-link").removeClass("active");
            $(this).toggleClass("active");
        })
    })


    const container = document.getElementById('container2');
    const registerBtn = document.querySelector('#register');
    const loginBtn = document.querySelector('#login');

    registerBtn?.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn?.addEventListener('click', () => {
        container.classList.remove("active");
    });

}
);
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

