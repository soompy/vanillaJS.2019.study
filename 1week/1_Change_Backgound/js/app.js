// 즉시실행함수
(function () {
/*
    // 한줄 주석은 // 요거 씀

    var boxWidth;

    var appleBoxWidth = "사과";
    console.log(appleBox);
    var a = "a",
        b = "b",
        c = "c";
*/








/*
    // 문자열
    var str1 = "dddd"; // 가능
    var str2 = 'kkkk'; // 가능

    // she's girl
    var str3 = "she's girl"; // 큰 따옴표 안에 작은 따옴표 가능
    var str4 = 'she\'s girl'; // 가능


    // 변수 안의 기존 데이터 변경 방법
    var appleBox = "사과";
    console.log(appleBox);

    appleBox = "멜론";
    console.log(appleBox);
*/









/*
    // 숫자
    var a = 30; // 정수
    var b = 3.14; // 실수

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);

    // 연산자
    // 숫자와 문자열 연산
    var str100 = "kim";
    var num100 = 100;
    console.log(str100 + num100);

    var firstName = "수민";
    var lastName = "이";
    console.log(lastName + firstName); // 문자열의 덧셈은 문자열을 나열하는 형식
*/








/*
    // 연산자 ++, --
    var num = 100;
    // console.log(++num);
    // console.log(++num);
    // console.log(num);
    // console.log(--num);

    // console.log(++num); // 101
    console.log(num++); // 일단 num 출력하고 나중에 +1을 해줌
    console.log(num);
*/






/*
    // 연산자 : +=, -=, *=, /=, %=
    var num200 = 200;
    num200 += 1; //  num200 = num200 + 1; 과 같은 값
    console.log(num200);
*/







/*
    // 연산자 : 비교 연산자 -> boolean : 참, 거짓만 반영
    // >, <, ==, ===, >=, <=, !=, !==

    // var a = 10,
    //     b = 20;
    // console.log(a == b);
    // console.log(a != b);

    var str1000 = "1000";
    var num1000 = 1000;
    console.log(str1000 == num1000);
    console.log(str1000 === num1000); // == 보다 더 엄격하게 판단(데이터 타입까지 판단함)
*/







/*
    // 논리 연산자
    var num11 = 11,
        num22 = 22,
        num33 = 22;

    console.log(num11 === num22 && num22 === num33); // 둘 중 하나라도 거짓이면 거짓
    console.log(num11 === num22 || num22 === num33); // 둘 중 하나라도 참이 있다면 true

    // boolean : true & false;
    // 제품마다 false =>
    // 담긴 제품만 true
*/







/*
    // null과 undefined 차이
    var empty10 = null;
    var empty20; // 변수를 선언한 상태만 undefined
    console.log(empty10);
    console.log(empty20);

    console.log(typeof empty10); // 데이터 타입이 null인 버그
    console.log(typeof empty20);

    console.log(null == undefined);
    console.log(null === undefined);

    console.log(!null);
    console.log(!!null);

    console.log(!undefined); // 데이터 타입 불리언
    console.log(!!undefined);

    console.log(1 + null); // 1
    console.log(1 + undefined); // NaN
*/








/*
    // 참조타입
    // 함수 : function
    // 코드를 재사용 할 때 사용

    /*console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");*/
/*
    function helloFunc(a, b) { // 함수를 선언한 상태
        // console.log("hello world" +  a + "" + b);
        return a + b;
    }
    // helloFunc(" Soomin", " Lee"); // a와 b에 할당됨
    // helloFunc(" 이", " 수민"); // a와 b에 할당됨
    helloFunc(10, 20); // a와 b에 할당됨
    console.log(helloFunc(10,20));


    var result = helloFunc(10, 20); // 호출시에 변수 안에 변수 선언이 가능함
    console.log(result);
*/

/*
            // 어디 틀림?
    function helloFunc(a, b) {
        console.log("hello world");
        return a + b;
        console.log("nice to meet you");
    }
    helloFunc();
*/
/*
    // 배열 - db와 밀접하게 관련있다. 동일한 성격의 배열만 나열해 줘야 한다.
    // var apple = "사과";
    // var banana = "바나나";
    //     var fruit = ["사과", "바나나"];
    //     console.log(fruit[0]);
    //     console.log(fruit[1]);

        var arr = [
            [10, 20],
            [100, 200]
        ];
        console.log(arr[1]);
        console.log(arr[1][1]);
        arr[1][1] = 2000;
        console.log(arr);
*/









/*
    // 객체 - 순서의 개념이 없다. 데이터를 배열보다 더 구체적으로 담을 수 있다.
    // var superman = ["레이저빔", "괴력", "쫄쫄이", "30대"];
    var superman = {
        // 프로퍼티
        // 키: 벨류
        age: 30,
        name: "클락",
        skills: ["레이저빔", "괴력"],
        sum: function (a, b) { // 메서드 - 객체 안에 들어있는 함수를 가르킴
            console.log(a + b);
        }
    };
    console.log(superman);
    console.log(superman.age);
    console.log(superman['name']);

    superman.age = 100;
    console.log(superman);
    console.log(superman.skills[0]);

    superman.sum(10, 20);

    superman.gender = "남자";
    console.log(superman);
   // arr[100] = "H";
*/









/*
    // 객체 프로퍼티 추가하는 방법
    var arr = [10, 20];
    arr[100] = 100;
    console.log(arr);
*/












    // 클릭했을 때
        // 배열을 탐색해서

    var colors = ['yellow', 'green', 'pink', '#DC143C', 'rgba(123, 123, 123, 0.5)'];
    var screen = document.getElementById("screen");
    var mouse = document.getElementById("mouse");


        // 이벤트 추가
        // 마우스를 클릭했을 떼
    mouse.addEventListener("click",function () { // mouse 인자를 클릭햇을 때
        // 전달할 함수 - 결과는 0~4 사이의 랜덤한 숫자를 가져오고,
        var result = Math.floor(Math.random() * 5); // 0~4  5의 색상
        // console.log(colors[result]);

        // 그 결과를 배열 안의 데이터 접근 공식을 활용해서 배경색상으로 넣어준다.
        screen.style.background = colors[result];
    })


    // console.log(Math.random()); // 0과 1 사이 값을 랜덤으로 호출한다.
    // Math.random() : 0.0000000 ~ 0.99999999
    // Math.random() * 6 : 1.00000000 ~ 5.9999999

    // Math.floor(Math.random() * 6) : 0 ~ 5; // 내림
    // Math.floor(Math.random() * 6) +1) : 1 ~ 6; // 내림
    // var result = Math.floor(Math.random()) * 6;
    // console.log(result);





    // 완성본 코드

    /*

    var colors = ['yellow', 'green', 'pink', '#DC143C', 'rgba(123, 123, 123, 0.5)'];

    var screen = document.getElementById('screen');
    var mouse = document.getElementById('mouse');

    mouse.addEventListener('click', function() { // 콜백함수 - 특정 조건에서 함수를 호출하는 것

        var random = Math.floor(Math.random() * colors.length);
        screen.style.background = colors[random];

    });

    */


})();



















