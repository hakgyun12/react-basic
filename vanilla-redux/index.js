import { createStore } from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션의 이름을 정의한다. 액션의 이름을 문자열 형태로 주로 대문자 작성
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 객체를 만드는 액션 생성 함수 생성, 액션 객체는 type 값을 반드시 갖고 있어야 한다.
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
    toggle: false,
    counter: 0
};

// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action){
    //action.type에 따라 다른 작업을 처리함
    switch(action.type){
        case TOGGLE_SWITCH:
            return {
                ...state,
                toogle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState(); // 현재 상태를 불러옵니다.
    // 토글 처리
    if (state.toggle){
        divToggle.classList.add('active');
    }else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};