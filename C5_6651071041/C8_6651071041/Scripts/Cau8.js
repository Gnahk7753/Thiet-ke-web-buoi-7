$(document).ready(function () {
    $(".operator").on("click", function () {
        var a = parseFloat($("#num1").val());
        var b = parseFloat($("#num2").val());
        var op = $(this).data("op");
        var result;

        if (isNaN(a) || isNaN(b)) {
            $("#result").val("Lỗi nhập liệu");
            return;
        }

        switch (op) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = b === 0 ? "Chia cho 0" : a / b;
                break;
            case "^":
                result = Math.pow(a, b);
                break;
        }

        $("#result").val(result);
    });
});
