var fullname = document.getElementById("fullname");

var fname = document.getElementById("fname");

var dob = document.getElementById("date");

var phone = document.getElementById("phone");

var email = document.getElementById("email");

var add = document.getElementById("add");

var exp = document.getElementById("exp");

var hobbies = document.getElementById("hobbies");

var Marital_Status = document.getElementById("ms");

//Qualifaction table 

var board = document.getElementById("board");

var percentage = document.getElementById("percentage");

var passing = document.getElementById("passing");


//download button script

function download() {
    var doc = new jsPDF({
        orientation: 'p',
        format: 'a4',

    });

    doc.setFont('verdana')
    doc.setFontSize(30);
    doc.setFontType("bold");
    doc.setTextColor(52, 40, 44);
    doc.text(20, 20, fullname.value);
    doc.line(10, 25, 200, 25) // horizontal line

    doc.setFont('times')
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(16);
    doc.setFontType("normal");

    doc.text(20, 35, 'Contact : ' + phone.value);
    doc.text(100, 35, 'Email ID : ' + email.value);
    doc.text(20, 45, 'Address : ' + add.value);
    doc.line(10, 50, 200, 50) // horizontal line

    //doc.text(20, 50, 'Date of birth : '+dob.value);
    doc.setFontType("bold");

    doc.text(90, 60, 'Qualifaction');

    doc.setFontType("normal");

    //Qualifaction table
    doc.text(60, 70, 'Board ');
    doc.text(100, 70, 'Percentage ');
    doc.text(160, 70, 'Year Of Passing ');

    doc.text(20, 80, '10th Class : ');
    doc.text(20, 90, '12th Class : ');
    doc.text(20, 100, 'Gradution : ');
    doc.text(20, 110, 'Post Gradution : ');

    //10th class
    doc.text(60, 80, ' ' + board.value);
    doc.text(100, 80, ' ' + percentage.value);
    doc.text(160, 80, ' ' + passing.value);

    //12th class
    doc.text(60, 90, ' ' + board.value);
    doc.text(100, 90, ' ' + percentage.value);
    doc.text(140, 90, ' ' + passing.value);

    //Gradution
    doc.text(60, 100, ' ' + board.value);
    doc.text(100, 100, ' ' + percentage.value);
    doc.text(160, 100, ' ' + passing.value);

    //Post Gradution
    doc.text(60, 110, ' ' + board.value);
    doc.text(100, 110, ' ' + percentage.value);
    doc.text(160, 110, ' ' + passing.value);

    doc.text(160, 70, ' ');
    //doc.text(20, 70, 'to achieve its goals and objective.');
    doc.line(10, 120, 200, 120) // horizontal line 
    //doc.line(10, 95, 200, 95) // horizontal line
    doc.setFontType(" ");

    //personal information
    doc.text(90, 130, 'Personal informatio');
    doc.text(20, 145, 'Father Name : ' + fname.value);
    doc.text(100, 145, 'Date of birth : ' + dob.value);
    doc.text(20, 155, 'Experience : ' + exp.value);
    doc.text(100, 155, 'Marital Status : ' + ms.value);
    doc.line(10, 170, 200, 170) // horizontal line

    doc.text(20, 180, 'Career Objective');
    doc.text(20, 190, 'To make a career with an esteemed organization by contributing my hard work \r\n to achieve its goals and objective.');

    // Save the PDF
    doc.save('document.pdf');
}


$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

