$(document).ready(function () {
    $(".TW").click(function () {
        window.location = "https://www.twitter.com/Thesigsauer"
    });

    $(".GH").click(function () {
        window.location = "https://www.github.com/TheSigSauer"
    });

    $(".FB").click(function () {
        window.location = "https://www.facebook.com/logan.sauer"
    });

    $(".IG").click(function () {
        window.location = "https://www.instagram.com/the_sigsauer"
    });

    $(".LI").click(function () {
        window.location = "https://www.linkedin.com/in/logan-sauer-27040a9b/"
    });

    $('.logos').mouseenter(function () {
        $(this).animate({ width: "50%", height: "50%" });
    })
        .mouseleave(function () {
            $(this).animate({ width: "30%", height: "30%" });
        });
});

let repoRequest = new XMLHttpRequest();
    repoRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let ghRepo = JSON.parse(this.responseText);
        document.getElementById("repo").addEventListener("click", function () {
            document.getElementById("RP").innerHTML = ghRepo.owner.login;
        })
    }
};
repoRequest.open("GET", "L10.json", true);
repoRequest.send();