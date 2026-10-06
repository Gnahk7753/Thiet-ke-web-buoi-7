$(document).ready(function () {
    $("#linkForm").on("submit", function (event) {
        event.preventDefault();
        var link = $.trim($("#linkInput").val());
        if (link === "") {
            alert("Vui lòng nhập đường link");
            return;
        }
        if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(link)) {
            link = "http://" + link;
        }
        if (confirm("Bạn có muốn chuyển đến " + link + " không?")) {
            window.location.href = link;
        }
    });
});
