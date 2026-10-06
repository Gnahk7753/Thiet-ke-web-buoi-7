function getOptions() {
    var items = [];
    $("#mySelect option").each(function () {
        items.push($(this).text());
    });
    alert("Số mục: " + items.length + "\n" + items.join("\n"));
}
