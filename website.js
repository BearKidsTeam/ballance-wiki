window.addEventListener("load", remove_url);
document.addEventListener("DOMSubtreeModified", remove_url);

function remove_url() {
    if ($(".gitbook-link").length > 0) {
        var link = document.getElementsByClassName("gitbook-link");
        link[0].parentNode.removeChild(link[0]);
    }
}