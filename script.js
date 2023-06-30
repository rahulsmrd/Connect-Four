

//Restart

var restart = $("#restart");
restart.on("click", reset);
var circles = $('input')
function reset() {
    alert("Do you Sure you want to Restart !!!")
    for (i in circles) {
        $('input').eq(i).css({ "background-color": "rgb(163, 163, 163)" })
    }
    listred = [];
    listblue = [];
}

//complte



//onclick of boxes

var player1 = prompt("Enter Name of Player-1")
var player2 = prompt("Enter Name of Player-2")
var head1 = $('h1');
var head2 = $('h2');
var para = $("#jq")
para.text(player1 + " : Its your turn")
var k = 1;
var o = 1;
var listred = [];
var listblue = [];
function change(a) {
    if (k == 1) {
        para.text(player2 + " : Its your turn");
        k = 0;
    }
    else {
        para.text(player1 + " : Its your turn");
        k = 1;
    }
    if (o == 1) {
        $('input').eq(a - 1).css({ "background-color": "red" })
        o = 0
        listred.push(a)
    }
    else {
        $('input').eq(a - 1).css({ "background-color": "blue" })
        o = 1
        listblue.push(a)
    }


    //complete


    // Sorting

    bubbleSort(listred)
    bubbleSort(listblue)

    //comlete

    //checking win

    for (i = 0; i <= listred.length - 4; i++) {
        if ((listred[i] + 1 == listred[i + 1]) && (listred[i] % 7 != 0)) {
            if ((listred[i + 1] + 1 == listred[i + 2]) && (listred[i + 1] % 7 != 0)) {
                if ((listred[i + 2] + 1 == listred[i + 3]) && (listred[i + 2] % 7 != 0)) {
                    head1.text(player1 + " is the winner !!!");
                    head2.text("Restart The game !!!");
                    changeColor();
                }
            }
        }
    }
    for (i = 0; i <= listblue.length - 4; i++) {
        if ((listblue[i] + 1 == listblue[i + 1]) && (listblue[i] % 7 != 0)) {
            if ((listblue[i + 1] + 1 == listblue[i + 2]) && (listblue[i + 1] % 7 != 0)) {
                if ((listblue[i + 2] + 1 == listblue[i + 3]) && (listblue[i + 2] % 7 != 0)) {
                    head1.text(player2 + " is the winner !!!");
                    head2.text("Restart The game !!!");
                    
                    changeColor();
                }
            }
        }
    }
}
//    1    2    3    4
//    i   i+1  i+2  i+3

//complete


//bubble sorting algorithm

function bubbleSort(list) {
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length; j++) {
            if (list[j] > list[j + 1]) {
                var temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
}

//complete

//Color Change

function changeColor() {
    function color() {
        head1.toggleClass("turnred")
    }
    setInterval(color, 500);
}

//complete