//2. For the above JSON, iterate over all for loops (for, for in, for of, forEach);

var json = 
[
    { 
        "name": "John Doe", 
        "age": 30, 
        "city": "Sample City", 
        "isStudent": false, 
        "grades": [95, 88, 75], 
        "address": 
        { "street": "123 Main Street", "zipcode": "12345", "country": "Sampleland" } 
    }, 
    { 
        "name": "Shan", 
        "age": 26, 
        "city": "Sample2 City", 
        "isStudent": true, 
        "grades": [95, 88, 75], 
        "address": { "street": "1st cross street", "zipcode": "67890", "country": "Sample2land" } 
    }
]; 
//for loop 
for(var i = 0; i < json.length; i++) { 
    var obj = json[i]; 
    console.log(obj.id); 
    console.log(obj.msg); 
    console.log(obj.task); 
    console.log(obj.mail); 
} 
//for Each 
json.forEach(function(obj) 
{ console.log(obj.msg); }); 
//for In 
for (var key in json) { 
    if (json.hasOwnProperty(key)) 
    { 
        console.log(json[key].id); 
        console.log(json[key].msg); 
    } 
} 
//for Of 
let text = ""; 
for (let x of json[key].id) { text += x; } console.log(text);