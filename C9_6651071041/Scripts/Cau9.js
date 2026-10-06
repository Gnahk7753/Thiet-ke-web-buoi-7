function isValidEmail(email) {
    var parts = email.split("@");
    if (parts.length !== 2) {
        return false;
    }
    var account = parts[0];
    var domain = parts[1];
    if (account === "" || account.split(".").length > 2) {
        return false;
    }
    if (/^\.|\.$|\.\./.test(account)) {
        return false;
    }
    if (domain.indexOf(".") === -1 || /^\.|\.$|\.\./.test(domain)) {
        return false;
    }
    return !/\s/.test(email);
}

function isValidDate(value) {
    var match = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/.exec(value);
    if (!match) {
        return false;
    }
    var month = parseInt(match[1], 10);
    var day = parseInt(match[3], 10);
    var year = parseInt(match[4], 10);
    if (month < 1 || month > 12 || year >= new Date().getFullYear()) {
        return false;
    }
    var date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function setError(id, message) {
    $(id).text(message);
    return message === "";
}

function finish() {
    var valid = true;

    valid = setError("#errName", $.trim($("#name").val()) === "" ? "Vui lòng nhập tên" : "") && valid;
    valid = setError("#errSex", $("input[name='sex']:checked").length === 0 ? "Vui lòng chọn giới tính" : "") && valid;

    var email = $.trim($("#email").val());
    var emailMessage = "";
    if (email === "") {
        emailMessage = "Vui lòng nhập email";
    } else if (!isValidEmail(email)) {
        emailMessage = "Email không hợp lệ";
    }
    valid = setError("#errEmail", emailMessage) && valid;

    var birthday = $.trim($("#birthday").val());
    var birthdayMessage = "";
    if (birthday === "") {
        birthdayMessage = "Vui lòng nhập ngày sinh";
    } else if (!isValidDate(birthday)) {
        birthdayMessage = "Ngày sinh không hợp lệ (mm/dd/yyyy hoặc mm-dd-yyyy)";
    }
    valid = setError("#errBirthday", birthdayMessage) && valid;

    valid = setError("#errStreet", $.trim($("#street").val()) === "" ? "Vui lòng nhập địa chỉ" : "") && valid;
    valid = setError("#errCity", $.trim($("#city").val()) === "" ? "Vui lòng nhập thành phố" : "") && valid;
    valid = setError("#errRegion", $("#region").val() === "" ? "Vui lòng chọn vùng" : "") && valid;

    var zip = $.trim($("#zip").val());
    var zipMessage = "";
    if (zip === "") {
        zipMessage = "Vui lòng nhập mã ZIP";
    } else if (!/^\d{5}$/.test(zip)) {
        zipMessage = "Mã ZIP phải gồm đúng 5 số";
    }
    valid = setError("#errZip", zipMessage) && valid;

    if (valid) {
        alert("Đăng ký thành công");
    }
}

function clearForm() {
    $("#registerForm")[0].reset();
    $(".error").text("");
}
