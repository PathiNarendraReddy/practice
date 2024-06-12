let courses=new Array("html","java","sql","python","node js","DBA");
document.write(courses);
let array=new Array(6);
array[0]=10;
array[1]=20;
array[2]=30;
array[3]=40;
array[4]=50;
array[5]=60;
document.write(array);
document.write(courses[2]);

let firstItem=courses[0];
document.write("FirstItem:", firstItem);

courses[3]="web";
document.write(courses);

courses.push("text tool");
document.write(courses);

courses.pop("text tool");
document.write(courses);

courses.unshift("text tool");
document.write(courses);

courses.shift("text tool");
document.write(courses);
