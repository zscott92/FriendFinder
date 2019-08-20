
let firstDropdown = $("#dropdown1");
let secondDropdown = $("#dropdown2");
let thirdDropdown = $("#dropdown3");
let fourthDropdown = $("#dropdown4");
let fifthDropdown = $("#dropdown5");
let sixthDropdown = $("#dropdown6");
let seventhDropdown = $("#dropdown7");
let eighthDropdown = $("#dropdown8");
let ninthDropdown = $("#dropdown9");
let tenthDropdown = $("#dropdown10");

let dropdownArray = [firstDropdown, secondDropdown, thirdDropdown, fourthDropdown, fifthDropdown, sixthDropdown,
    seventhDropdown, eighthDropdown, ninthDropdown, tenthDropdown];

$(document).ready(function () {
    for (let i = 1; i <= dropdownArray.length; i++) {
        var selectedDrop = ("dropdown") + i;
        const selectedButton = ("dropdownMenuButton") + i;
    
        $("#" + selectedDrop + " a").click(function (e) {
            e.preventDefault(); // cancel the link behaviour
            var selText = $(this).html();
            var selectedValue = $("#" + selectedButton).text(selText);
            var value = selectedValue.html();
            value = parseInt(value.substring(0, 1));
            dropdownArray[i - 1] = value;
            console.log(value);
            console.log(dropdownArray);
        });
    }
});
$("#submit").click(function () {
    console.log(dropdownArray);
        dropdownArray.forEach(function () {
            var newPerson = express.Person([dropdownArray]);
            console.log(newPerson);
        });
});
