const sumit = document.getElementById("sumit");
const heads = document.querySelectorAll('input[name="head"]');
const heads1 = document.querySelector('input[name="head"][value="282"]');
const heads2 = document.querySelector('input[name="head"][value="362"]');
      
sumit.addEventListener("click", (e)=> {
    e.preventDefault();
    const number = document.getElementById("number")=""; 
})

// 為被選擇到的元素都綁定事件
heads.forEach(function(head) {
    head.addEventListener("change", refreshTotal);
});
function refreshTotal(e) {
let total = Number(number.value)*260;
heads.forEach(function(head) {
    if (head.checked) {
    total += Number(head.value);
    }
});
    displayTotal(total);
}
// 用來將算好的 total 顯示在 input 欄位中
const totalInput = document.querySelector("#total");
function displayTotal(total) {
    totalInput.value = total;
}
// 清除
// 選擇所有 input 元素
const inputAll = document.querySelectorAll("input");
function resetAll() {
  inputAll.checked = false;
}
      
   
