(function () {


    // 클래스 : 생성자 함수 - 비슷한 유형의 데이터를 찍어낼 때 사용하는 함수(붕어빵틀)
    // 부모클래스
/*    
    function Person(firstName, lastName) { // person 생성자 함수

        // 프로터티들
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = function() {
            console.log(this.firstName + " " + this.lastName);
        } 
    }

    // class heroes extends Person {
    //     skills
    //     gender
    //     country 
    // }

    // kim과 park이 생성자 함수로 생성된 인스턴스이다. - 붕어빵 틀로 찍어낸 함수
    var kim = new Person("inkweon", "Kim"); // person 객체
    var park = new Person("David", "Park");

    kim.fullName(); // fullName 메서드
    park.fullName();

    console.log(kim);
    console.log(park);
*/
    
/*
    function Student(gender, age, name) {
        this.gender = gender;
        this.age = age;
        this.name = name;

        console.log(this.gender);
        console.log(this.age);
        console.log(this.name);
    }

    var kim = new Student("Male","20","kim");

    console.log(kim.name);
    console.log(kim.gender);
    console.log(kim.age);
*/


    // 프로토타입
/*   
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // 생성자 함수 내에서는 프로토타입을 주로 사용된다.
    // 생성자 함수를 만드는 순간 person 프로토타입이 생성된다.

    Person.prototype.fullName = function() { // 프로토타입
        console.log(this.firstName + " " + this.lastName);
    };

    var kim = new Person("inkweon", "Kim");
    var park = new Person("David", "Park");


    // kim.fullName();
    // park.fullName();

    console.log(kim);
    console.log(park); 
*/


    // _proto_
/*
    var arr = new Array(1);
    console.dir(arr);

    var str = new String("K");
    console.dir(str);

    var func = new Function("x, y", "return x * y");
    console.dir(func);
*/


/*
    var person = new Object();
    person.name = "Kim In Kweon";
    person.age = 20;
    person.sayHi = function() {

    };

    console.log("Hi")
    console.dir(person);
    console.log(person.__proto__ === Object.prototype);
*/

/*
    var arr = new Array(1);
    console.dir(arr);
    console.log(arr.__proto__ === String.protoype);
*/
/*
    var str = new String("Soomin");
    console.log(str.__proto__ === String.prototype);
    console.log(String.prototype.__proto__ === Object.prototype);
*/



    // constructor
/*
    var str = new String("Hello World");
    console.log(str.constructor === String);
*/





    // 조상 탐색하기
/*
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.fullName = function() {
        console.log(this.firstName + " " + this.lastName);
    };

    
    var kim = new Person("inkweon", "Kim");

    // console.log(kim.__proto__ === Person.prototype);
    // console.log(Person.prototype.__proto__ === Object.prototype);
    // console.log(kim.constructor === Person);
    // console.log(Person.prototype.constructor === Person);

    console.log(Person.__proto__ == Function.prototype);
    console.log(Person.prototype.__proto__);
    console.log(Person.__proto__ == Object.prototype);

    var str = new String("k");
    console.dir(String.__proto__ === Function.prototype);
*/



    // this
/*    
    var personOne = {
        name: "Kim",
        age: 100,
        getName: function() {
            console.log(this.name);
             // personOne.name
    }
    };

    var personTwo = {
        name: "Park",
        age: 999,
        getName: function() {

            var that = this;

            function test() {
                console.log(that.name); // 메서드에서 여기서 this는 window를 가리키는 객체이다. // 내부함수에 this를 넣으면 위험하다.
            }
            test();

            // console.log(this.name);
            // personTwo.name
        }
    };

    personOne.getName();
    personTwo.getName();
*/     

/*
    var name = "이수민";
    console.log(`내 이름은 ${name}입니다.`);
*/









    // 실습 코드
    var customers = [];
    var index = 0;

    function Customer(name, img, text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }

    function createCustomer(name, img, text) {
        var fullImg = `img/customer-${img}.jpg`;
        var customer = new customer(name, fullImg, text);
        customers.push(customer);
    }

    createCustomer("아이언맨", "0", "Hello World");
    createCustomer("토르", "1", "Nice to meet you");
    console.log(createCustomer);




    















    // 완성본 코드
    /*
    var customers = [];
    var index = 0;


    // 생성자 함수
    function Customer(name, img, text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }

    function createCustomer(name, img, text) {
        var fullImg = `img/customer-${img}.jpg`;
        var customer = new Customer(name, fullImg, text);
        customers.push(customer);
    }

    createCustomer("아이언맨", 0, "Hello World");
    createCustomer("토르", 1, "Nice to meet you");
    createCustomer("헐크", 2, "Great!!");
    createCustomer("캡틴 아메리카", 3, "Welcome to Real World");

    console.log(customers);
    console.log(customers[0].name);



    // 2회차 때 작성된 코드
    document.querySelectorAll('.btn').forEach(function(item) {

        item.addEventListener('click', function (e) {

            e.preventDefault();

            // console.log(e.target);
            if (e.target.classList.contains('prevBtn')) {

                // 배열의 가장 앞 데이터에 접근했을 때
                if (index === 0) {
                    index = customers.length;
                }

                index--;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            }

            if (e.target.classList.contains('nextBtn')) {
                // 배열의 가장 끝 데이터에 접근했을 때
                if (index === (customers.length - 1)) {
                    index = -1;
                }

                index++;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            }

        })
    })
     */


})();