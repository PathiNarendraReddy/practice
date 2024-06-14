function student(rno,name,branch){
    this.rno=rno;
    this.name=name;
    this.branch=branch;
}
var student1=new student(333,"Narendra Reddy","Mecs");
document.write(student1.rno+""+student1.name+""+student1.branch);

var student2=new student(111,"Mahendra Reddy","Mbipc");
document.write(student1.rno+""+student1.name+""+student2.branch);

var student3=new student(444,"mahesh","Msc");
document.write(student1.rno+""+student1.name+""+student3.branch);

var student4=new student(555,"vishal","MCA");
document.write(student1.rno+""+student1.name+""+student4.branch);

var student5=new student(666,"","Mtech");
document.write(student1.rno+""+student1.name+""+student5.branch);
