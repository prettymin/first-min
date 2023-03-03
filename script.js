class Calculator {
    // class를 선언한다
    constructor(displayElement) {
        // 생성자 함수를 통해 displatElement = displayElement의
        // 초기 상태를 지정하기 위한 책상정리를 한다.
        this.displayElement = displayElement
        // this는 인스턴스 자신을 가르키는 참조변수다.
        // Calculator 클래스의 안에 있는 인스턴스 변수 displayElement에
        // displayElement를 담는다
        this.displayContent = ''
        // Calculator 클래스의 안에 있는 인스턴스 변수 displaycontent에
        // 빈문자열을 담는다.
        // this.displayContent = ''라고 표시했다.따음표 표시했으므로 문자열이다.
        this.clear()
        
        
    }
    appendNumber(number) {
        // appendeNumber메서드(작업) 추가.
        // +=는 복합대입 연산자인데, thisplayContent = this.displayContent+number와
        // 같은 의미를 가진다. 문자열(String)에 +기호를 쓴 경우 덧셈을 하라는 것이 아니라
        // 문자열을 잇는다는 것이다. ex) 10 +1 = 101
        this.displayContent += number
    }
    appendOperator(operator){
        this.displayContent+=operator
        // this.displayContent = this.displayContet+operator 의 의미다.
    }
    updateDisplay() {
        // updateDisplay 메서드(작업)추가
        this.displayElement.value = this.displayContent
        // this.displayElement의 값(value)에 this.displayContent를 담는다.
    }
    clear() {
        this.displayContent = ''
        this.displayElement.value = 0

    }
    compute() {
        this.displayContent = eval(this.displayContent
            .replace('\u00D7','*')
            .replace('\u00F7','/')
            //"\u00D7" 는 ×, "\u00F7"는 ÷를 의미한다.
            )
    }
}
const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')
const calculator = new Calculator(displayElement)
// new 함수를 통해 Calculator 라는 객체를 만든다. 이 객체에는 위에서 정의한
// 것과 같이 displayElement와 displayContent가 세팅되어있다.
buttons.forEach(button => {
    // arrow 함수 forEach문은 다음과 같다.
    // 리스트.forEach(원소=>함수(원소));
    // 리스트 내의 각 원소를 함소 안에 차례로 넣는다.
    // 클릭한 버튼이 연산자이면,calculator 클래스의 appendOperator 메서드를 추가한다.
    // element.innerText;는 자바스크립트에 내장된 기능이다. HTML element안의 텍스트를 가져온다.
    button.addEventListener('click', () => {
//대상객체.addEventListener('이벤트명', fuction 함수명(event){}) = ‘이벤트만들기’)
// 화살표 함수는 function 키워드 대신 화살표를 사용하여 간략하게 함수를 선언하는 것이다
// 매개변수가 없는 경우 ()=>{…} 처럼 사용할 수 있다.
        // addEventListener등으로 등록할 수 있는 이벤트
// 이벤트 명	설명
// change	    변동이 있을 때 발생
// click	    클릭시 발생
// focus	    포커스를 얻었을 때 발생
// keydown	    키를 눌렀을 때 발생
// keyup	    키에서 손을 땟을 때 발생
// load	        로드가 완료 되었을 때 발생
// mousedown	마우스를 클릭 했을 때 발생
// mouseout	    마우스가 특정 객체 밖으로 나갔을 때 발생
// mouseover	마우스가 특정 객체 위로 올려졌을 때 발생
// mousemove	마우스가 움직였을 때 발생
// mouseup  	마우스에서 손을 땟을 때 발생
// select	    option 태그 등에서 선택을 햇을 때 발생
        switch (button.dataset.type) {
            case 'ac':
                calculator.clear()
                break
            case 'operator':
                calculator.appendOperator(button.innerText)

                calculator.updateDisplay()
                break
            
            case 'equals':
                calculator.compute()

                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
// data-type은 html코드에서 요소별로 부여했다. button.dataset.type 부분은 button의 데이터타입을 가져오는 것이고,
// 케이스별로 분류하여 'operator', 'ac', 'equals'와 비교하여 일치여부 판단하고 콘솔 로그에 표시한다.
    })
})




