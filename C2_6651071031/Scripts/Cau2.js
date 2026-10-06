function getFormvalue() {
    var fname = $("#form1 input[name='fname']").val();
    var lname = $("#form1 input[name='lname']").val();
    var fullName = fname + " " + lname;
    $("#result").text("Họ và tên: " + fullName);
    alert(fullName);
    return false;
}
