


let listVideo = document.querySelectorAll(".video-list .vid")
let mainVideo = document.querySelector(".main-video iframe")
let title = document.querySelector(".main-video .title")

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove("active"));
        video.classList.add("active")
        if (video.classList.contains("active")) {
            let src = video.children[0].getAttribute("src");
            mainVideo.src = src
            let text = video.children[1].innerHTML;
            title.innerHTML = text
        }
    }
})





let button = document.getElementById("end1")
let inputt = document.getElementById("input")
let end = document.getElementsByClassName("end")[0]


button.onclick = function () {
    if (inputt.value == localStorage.getItem("code")) {
        end.style.display = "none"
    }
}