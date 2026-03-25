let number=0;

// h1에 있는 숫자 요소를 가져오자
// const resultH1 = document.getElementsByTadgName("h1")[0];
const resultH1 = document.getElementById("result");
// button에 있는 + 요소를 가져오자
// const plusButton = document.getElementsByTagName("button")[0];
const plusButton = document.getElementsByClassName("plus")[0]; //대괄호 꼭 있음(시험)
// plusButton.addEventListener("click", ()=>{
//     number++;
//     resultH1.innerHTML = number;
// });
// plusButton.onclick = ()=>{
//     number++;
//     resultH1.innerHTML = number;
// }
// const plus = ()=>{
const plus=(value=1)=>{
    // number++;
    number+=value;
    resultH1.innerHTML = number;
}
const reset=()=>{
    number=0;
    resultH1.innerHTML=number;
}