var curIndex1=0;
var timeInterval=2000;
var arr1=new Array();
arr1[0]="pictures/x1.jpg";
arr1[1]="pictures/x2.jpg";
arr1[2]="pictures/x3.jpg";
arr1[3]="pictures/x4.jpg";
arr1[4]="pictures/x5.jpg";
arr1[5]="pictures/x6.jpg";
setInterval(changelmg1,timeInterval);
function changelmg1(){
    var obj=document.getElementById("obj1");
    if(curIndex1==arr1.length-1){
        curIndex1=0;
    }
    else{
        curIndex1+=1;
    }
    obj.src=arr1[curIndex1];
}
var curIndex2=0;
var timeInterval=2000;
var arr2=new Array();
arr2[0]="pictures/c1.jpg";
arr2[1]="pictures/c2.jpg";
arr2[2]="pictures/c3.jpg";
arr2[3]="pictures/c4.jpg";
arr2[4]="pictures/c5.jpg";
arr2[5]="pictures/c6.jpg";
setInterval(changelmg2,timeInterval);
function changelmg2(){
    var obj=document.getElementById("obj2");
    if(curIndex2==arr2.length-1){
        curIndex2=0;
    }
    else{
        curIndex2+=1;
    }
    obj.src=arr2[curIndex2];
}
var curIndex=0;
var timeInterval=2000;
var arr=new Array();
arr[0]="pictures/q1.jpg";
arr[1]="pictures/q2.jpg";
arr[2]="pictures/q3.jpg";
arr[3]="pictures/q4.jpg";
arr[4]="pictures/q5.jpg";
arr[5]="pictures/q6.jpg";
setInterval(changelmg3,timeInterval);
function changelmg3(){
    var obj=document.getElementById("obj3");
    if(curIndex==arr.length-1){
        curIndex=0;
    }
    else{
        curIndex+=1;
    }
    obj.src=arr[curIndex];
}