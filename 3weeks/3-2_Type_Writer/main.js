(function() {


    // 실습 코드
/*  
    var arr = [10, 20, 30];
    var index = 0;

    var loop = function() {
        var current = index % arr.length;   // 0  1  2
        console.log(arr[current]);  // 10  20  30
        index++;

        setTimeout(function() { // setTimeout은 한번만 호출하는 의미
            return loop();
        },2000);
    }

    loop();
*/
/*
    var loop = function () {
        var current = index % arr.length;
        console.log(arr[current]);
        index++;

        setTimeout(function() {
            return loop();
        }, 2000);
    }

    loop();
*/







    // 실습 코드
    function TypeWriter(txtElement, words, wait) {
    
        this.txtElement = txtElement;
        this.words = words;
        this.wait = parseInt(wait, 10);
    
        // 엔
        // 엔드
        // 엔드게
        // 엔드게임
        this.txt = "";
        this.wordIndex = 0;
        this.isDeleting = false;
    
        this.type(); // type이라는 함수를 내부에서 실행시킴
    
    }

    // type함수
    TypeWriter.prototype.type = function() {

        // var words = ["에이지 오브 울트론", "인피니티 워", "엔드게임"];
        var current = this.wordIndex % this.words.length;
        var fulltxt = this.words[current];  // 에이지 오브 울트론

        // 삭제중
        if(this.isDeleting) {
            // 에이지 오브 울트론
            // 에이지 오브 울트
            // 에이지 오브 울
            // 에이지 오브
            // 에이지 오
            // 에이지 
            this.txt = fulltxt.substring(0, this.txt.length - 1);


            // 작성중
        } else {
            // 에이지 오브 울트론
            // this.txt.length = 0;
            // this.txt = "에";
            // this.txt.length = 1;
            // this.txt = fulltxt.substring(0, 2);
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        // 에
        this.txtElement.innerHtml = `<span class="txt">${this.txt}</span>`;
        
        var typeSpeed = 300;

        // 글씨가 다 완성된 경우,
        // 글자가 사라진 경우
        if(!this.isDeleting && this.txt === fulltxt ) {
            typespeed = this.wait;
            this.isDeleting = true; 
        } else if(this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }
        
        var that = this;
        setTimeout(function() {
            return that.type();
        },typeSpeed);
    };
    

    var txtElement = document.querySelector('.txt-type'); // 텍스트를 넣을 타입
    var words = ["에이지 오브 울트론", "인피니티 워", "엔드게임"];
    var wait = 3000; // 한 글자씩 입력되는 , 삭제되는 , 완성 후 정지되는 시간
    
    
    new TypeWriter(txtElement, words, wait);












    // 완성본 코드
    // TypeWriter 생성자 함수
    /*
    function TypeWriter(txtElement, words, wait) {

        this.txtElement = txtElement;
        this.words = words;
        this.wait = parseInt(wait, 10);  // 10진수

        this.txt = "";
        this.wordIndex = 0;
        this.isDeleting = false;

        this.type();

    }

    TypeWriter.prototype.type = function() {


        var current = this.wordIndex % this.words.length; // 배열 안 텍스트 좌표
        var fulltxt = this.words[current];                // 배열 안 텍스트 가져오기


        if(this.isDeleting) {

            // substring() : https://www.codingfactory.net/10429
            // 전체글자 기준 뒤에서 한 글자씩 제거
            this.txt = fulltxt.substring(0, this.txt.length - 1);

        } else {
            // 전체 글자 기준 앞에서 한 글자씩 붙이기
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }

        // 글자가 들어갈 HTML 코드
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;




        var typeSpeed = 300;       // 기본 속도값



        if(this.isDeleting) {
            typeSpeed /= 2;        // 글자가 사라지는 속도값
        }



        // 전체 단어가 완성되었다면
        if(!this.isDeleting && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;


       // 단어가 모두 사라졌다면
        } else if(this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }



        var that = this;
        setTimeout(function() { return that.type(); }, typeSpeed);


    };


    var txtElement = document.querySelector('.txt-type');
    var words = ["에이지 오브 울트론", "인피니티 워", "엔드게임"];
    var wait = 3000;

    new TypeWriter(txtElement, words, wait);
    */



})();










