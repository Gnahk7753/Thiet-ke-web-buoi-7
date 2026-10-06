function insert_Row() {
    var rowNumber = $("#sampleTable tr").length + 1;
    var row = "<tr><td>Row" + rowNumber + " cell1</td><td>Row" + rowNumber + " cell2</td></tr>";
    $("#sampleTable").append(row);
}
