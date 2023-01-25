// created class
class person{
    constructor(name,age,email,location,company,hobbies,qualification){
        this.name=name;
        this.age=age;
        this.email=email;
        this.location=location;
        this.company=company;
        this.hobbies=hobbies;
        this.qualification=qualification;
    }
getData(){
    let personData=`
        name=${this.name}
        age=${this.age}
        email=${this.email}
        location=${this.location}
        company=${this.company}
        hobbies=${this.hobbies}
        qualification=${this.qualification}
        `;
        console.log(personData);

    }
    
}
    


// create an object
let person1= new person("arun",30,"arun@gmail.com","chennai","CTS","painting","B.E");
let person2= new person("John",32,"john@gmail.com","kerala","IBM","Writing","B.Tech");
let person3= new person("Ram",35,"ram@gmail.com","Bangalore","Infoys","Gardening","M.Tech");

person1.getData();
person2.getData();
person3.getData();