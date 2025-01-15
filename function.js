// function bc(a,b,c){
//    if (a>b&&a>c){
//     return a
//    }
//    else if(b>c){
//     return b
//    }
//    else{
//     return c
//    }
// }
// console.log(bc(3,6,5))



// function great(a,b){
     


// }
// console.log(great(12,18))




// function fact(a){
//     var sum=1
//     for(var i=1;i<=a;i++){
//       sum*=i
//     }
//     return sum
// }
// console.log(fact(5))


// function anagram(a,b){
//      var k=""  
//      var c=a.split("")
//      var d=b.split("")
//      c.sort();
//      d.sort();
//      if(c.join("")==d.join("")){
//        k="its anagram"
//        return k
//      }
//      else{
//       k="its not anagram"
//       return k
//      }

// }
// console.log(anagram("abcd","cbdat"))



// function palindrome(a){
//    var ab=a.split("").reverse().join("")
//    if(a==ab){
//       var k="its palindrome"
//       return k
//    }
//    else{
//       var k="its not palindrome"
//       return k
//    }
// }
// console.log(palindrome("malayalam"))



// var a="hi friends goodmorning friends nishan"
// var ab=a.split(" ")
// var dc=a.length
// var k=0
// var c=0
// var bc=ab[k]
// for(var i=0;i<dc;i++){
//    for(var j=0;j<dc;j++){
//       if(bc!=ab[i]){
//          k++
//         }
//       else{
//          bc=ab[i]
//       }
//    }
//    bc==ab[k]
// }
// console.log(bc)


// var a="hi friends goodmorning friends nishan"
// var ab=a.split(" ")
// var dc=ab.length
// var c="goodmorning"
// var d=""
// for(var i=0;i<dc;i++){
//     if(ab[i]==c){
//         continue
//     }
//     else{
//        d+=ab[i] 
//        d+=" "
//     }
// }
// console.log(d)



// a=["car","apple","orange","cat"]
// n=a.length
// b=[]
// for(var i=0;i<n;i++){
//     var m=a[i].length
//     if(m>=5){
//        b.push(a[i])
//     }
// }
// console.log(b)


// var a="hi googdmoring"
// var b="o"
// var n=a.length
// var m=0

// for(var i=0;i<n;i++){
//     if(a[i]=="o"){
//         m+=1
//     }
// }
// console.log(m)










// var a=["cat","apple","rat","baloon"]
// n=a.length

// for(var i=0;i<n;i++){
     
// }


// a=["mango","apple","mango","mango","apple","pinapple"]
// n=a.length
// for(var i=0;i<n;i++){

// }



var students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];

// var ab=students.filter(item=>item.score>70)
// console.log(ab)



// var ab=students.map(student=>{
//     var grade
//     if(student.score>=90){
//         grade="A"
//     }
//     else if(student.score>=80){
//         grade="B"
//     }
//     else if(student.score>=70){
//         grade="c" 
//     }
//     else{
//         grade="F"
//     }
//    return{grade}
// })
// console.log(ab)




// var ab=students.reduce((acumelator,student)=>acumelator+student.score,0)
// console.log(ab)

