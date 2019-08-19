// const fs = require("fs");

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
    // $('.dropdown').on("hidden.bs.dropdown", function (event) {
    //     var val1 = $().val();
    //     console.log(val1);
        
    // });
    for (let i = 1; i <= dropdownArray.length; i++) {
        var selectedDrop = ("dropdown") + i;
        var selectedButton = ("dropdownMenuButton") + i;
    
        $("#" + selectedDrop + " a").click(function (e) {
            e.preventDefault(); // cancel the link behaviour
            var selText = $(this).html();
            var selectedValue = $("#" + selectedButton).text(selText);
            var value = selectedValue.html()
            value = value.substring(0, 1);
            console.log(parseInt(value));
        
        });
    }
});



//     function readArray() {
//     for (let i = 0; i < dropdownArray.length; i++) {
//         var itemSelected = $(".dropdown-item").text();
//         console.log(parseInt(itemSelected));
//     }
// }
// 
// class Friends {
//     constructor(friend) {
//         $("#name").text(name);
//         $("photoImageInput").text(imageInput);
//         var preferenceArray = {


//         }
//         for (let i = 0; i < 10; i++) {
//             $(".dropdown-menu").value(selectedValue);
//             for (let i = 0; i < 5; i++) {
//                 $(".dropdown-item").value
//             }
//         }

//     }
// }

// fs.appendFile("bank.txt", ", " + value, function (err) {
//     if (err) {
//         return console.log(err);
//     }
// });