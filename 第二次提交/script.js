let tasks = [];

function renderEditor(){
    let inputEl = document.querySelector("#default-todo-panel .todo-shuruk > input");
    let buttonEl = document.querySelector("#default-todo-panel .todo-shuruk > button");
    let zihanshu = () => {
        let newtesk = {
title: inputEl.value,
done: false,
};            //捕捉输入框内的内容
inputEl.value = "";
tasks.push(newtesk);
console.log("ok",tasks);
   rendertask();
    }
    buttonEl.onclick = (e) => {
zihanshu();
//console.log("button");

};
inputEl.onkeypress = (e) =>{
    if (e.key === "Enter"){
zihanshu();
    }
}
    
}

function rendertask() {
    console.log("yes");
   let xiangmusEl = document.querySelector("#default-todo-panel .todo-xiangmu");
xiangmusEl.querySelectorAll("div").forEach((node)=>node.remove());          //删除全部内容
for(let i = 0;i < tasks.length;i++){
    
let xiangmuEl = document.createElement("div");
xiangmusEl.append(xiangmuEl);     //添加一个div元素

let doneEl = document.createElement("input");
doneEl.type = "checkbox";
xiangmuEl.append(doneEl);   //添加一个判断框


let titleEl = document.createElement("label");
titleEl.innerText = tasks[i].title;
xiangmuEl.append(titleEl);   //添加内容

let bottEl = document.createElement("button");
bottEl.innerText = "×";
bottEl.onclick = () => {
tasks.splice(i,1);    //删除第i个
rendertask();
};
xiangmuEl.append(bottEl);    //添加删除按钮

}

}
renderEditor();
rendertask();

