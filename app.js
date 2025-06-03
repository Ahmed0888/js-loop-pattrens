// var num = +prompt("Enter a number ");

// for (var i = num; i >= 1; i--) {
//   document.write("table of " + i + " is :" + "<br>");
//   for (j = 1; j <= 10; j++) {
//     document.write(i + "x" + j + "=" + j * i + "<br>");
//   }
// }

//Right angle triangle with 5 rows
// {
//   let rows1 = 5;
//   for (var i = 1; i <= rows1; i++) {
//     let shape = "";
//     for (var j = 1; j <= i; j++) {
//       shape += "*";
//       console.log(shape);
//     }
//     document.write(shape + "<br/>");
//   }
// }

//Number increasing pyramid
//1
{
  let rows = 4;
  for (var i = 1; i <= rows; i++) {
    let shape = "";
    for (var j = 1; j <= i; j++) {
      shape += j;
    }
    console.log(shape);
    document.write(shape + "<br/>");
  }
  document.write("<br/>");
}
//2
// //Number increasing reverse pyramid
{
  let rows = 4;
  for (let i = rows; i >= 1; i--) {
    let shape = "";
    for (let j = 1; j <= i; j++) {
      shape += j;
    }
    console.log(shape);
    document.write(shape + "<br/>");
  }
  document.write("<br/>");
}
//3
// reverse right half pyramid
{
  let rows = 5;
  for (var i = 5; i >= 1; i--) {
    let shape = "";
    for (var j = 1; j <= i; j++) {
      shape += "*";
    }
    console.log(shape);
    document.write(shape);
    document.write("<br/>");
  }
  document.write("<br />");
}
//practice right angle triangle
// {
//   const rows = 4;
//   for (let i = 1; i <= rows; i++) {
//     let count = 1;
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += count + " ";
//       count++;
//     }
//     console.log(row);
//     document.write(row + "<br>");
//   }
//   document.write("<br /> <br />");
// }
// 4
// Left half pyramid
{
  let rows = 5;
  for (let i = 1; i <= rows; i++) {
    let shape = "";
    for (let space = 1; space <= rows - i; space++) {
      shape += " ";
    }
    for (let star = 1; star <= i; star++) {
      shape += "*";
    }
    console.log(shape);
    document.write(shape + "<br>");
  }
  document.write("<br /> <br />");
}
// Triangle  Star Pattern
//5
{
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
      document.write("&nbsp;");
    }

    for (let k = 1; k <= i; k++) {
      document.write("*");
    }

    document.write("<br />");
  }

  document.write("<br />  <br />");
}
// Reverse left-Half Pramid
//6
{
  let value = 5;
  let star = "";

  for (let i = 0; i < 5; i++) {
    for (let k = 0; k < i; k++) {
      document.write("&nbsp;&nbsp;");
    }

    for (let j = 0; j < value - i; j++) {
      star += value;

      document.write("*");
    }

    document.write("<br />");
  }

  document.write("<br />  <br />");
}
