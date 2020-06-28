

let tasks = [];   //{title:     done:      important   }


function renderEditor() {
    let inputEl = document.querySelector("#default-todo-panel .todo-shuruk > input");
    let buttonEl = document.querySelector("#default-todo-panel .todo-shuruk > button");
    let zihanshu = () => {
        if (inputEl.value.length === 0) {
            return;
        }
        let newtesk = {
            title: inputEl.value,
            done: false,
            important: false,
        };            //捕捉输入框内的内容
        inputEl.value = "";
        tasks.push(newtesk);
        //     console.log("ok", tasks);
        rendertask();
    }
    buttonEl.onclick = () => {
        zihanshu();
        //console.log("button");

    };
    inputEl.onkeypress = (e) => {
        if (e.key === "Enter") {
            zihanshu();
        }
    }

}

function rendertask() {
   // console.log("yes");
    let xiangmusEl = document.querySelector("#default-todo-panel .todo-xiangmu");
    xiangmusEl.querySelectorAll("div").forEach((node) => node.remove());          //删除全部内容
   
   
    for (let i = 0; i < tasks.length; i++) {
       
        let xiangmuEl = document.createElement("div");
        xiangmusEl.append(xiangmuEl);     //添加一个div元素
        xiangmuEl.className = "task";



        let doneEl = document.createElement("input");
        doneEl.type = "checkbox";
        doneEl.length = tasks.length;
doneEl.checked = tasks[i].done;
let r = 0;
for(let t = 0; t < doneEl.length; t++){
    if (tasks[t].done){
        r++;
    }
}console.log(r);

        


        if (tasks[i].done) {
            xiangmuEl.classList.add("done");
                            
        } else {
            xiangmuEl.classList.remove("done");


        };

        doneEl.onchange = (e) => {
             console.log("checkbox: ",e);

            tasks[i].done = e.target.checked;
            if (tasks[i].done) {
                xiangmuEl.classList.add("done");
                
                 for (let d = tasks.length -1; d > i; d--) {
                                let f;
                               
                                f = tasks[i];
                                tasks[i] = tasks[d];
            
                                tasks[d] = f;
                               
                                  
                                rendertask();
                            }
                          
                            

            } else {
                xiangmuEl.classList.remove("done");

            }
        };
        
        
           
                        

        xiangmuEl.append(doneEl);   //添加一个判断框


        let titleEl = document.createElement("label");
        

        titleEl.innerText = tasks[i].title;
//console.log("i",i)
//console.log("tasks",tasks[i]);
        xiangmuEl.append(titleEl);   //添加内容




        

      

        let ctrlEl = rendercontrl(tasks, i);
        xiangmuEl.append(ctrlEl);


        let vipEl = document.querySelectorAll(".contrl input")[i];
        vipEl.checked = tasks[i].important;




        if (tasks[i].important) {
            xiangmuEl.classList.add("ok");
        } else {
            xiangmuEl.classList.remove("ok");
        }
        vipEl.onchange = (e) => {
            // console.log("checkbox: ",e);                                     //突出重点内容，变红，加粗

            tasks[i].important = e.target.checked;
            if (tasks[i].important) {
                xiangmuEl.classList.add("ok");
                for (let b = 0; b < i; b++) {
                    let c;

                    c = tasks[i];
                    tasks[i] = tasks[b];

                    tasks[b] = c;
                    
                    rendertask();
                }

            } else {
                xiangmuEl.classList.remove("ok");
            }


            

        };










    }

}

function rendercontrl(tasks, taskidx) {

    let ctrlEl = document.createElement("div");
    ctrlEl.className = "contrl";

    let upEl = document.createElement("button");
    if (taskidx === 0 ) {
        upEl.disabled = true; 
    }

    upEl.innerText = "↿";
    ctrlEl.append(upEl);
    upEl.onclick = () => {
       
        let news;
        news = tasks[taskidx];
        tasks[taskidx] = tasks[taskidx - 1];
        tasks[taskidx - 1] = news;
        rendertask();
                               }                           // 向上的箭头，以及向上移动


    let downEl = document.createElement("button");
    downEl.innerText = "⇂";
    if (taskidx === tasks.length - 1) {
        downEl.disabled = true;
    }
    ctrlEl.append(downEl);
    downEl.onclick = () => {
        let news;
        news = tasks[taskidx];
        tasks[taskidx] = tasks[taskidx + 1];
        tasks[taskidx + 1] = news;
        rendertask();
    }                             //向下的箭头，以及向下移动

    let vipEl = document.createElement("input");
    vipEl.type = "checkbox";
    ctrlEl.append(vipEl);             //重点内容




    let bottEl = document.createElement("button");
    bottEl.innerText = "✖";
    bottEl.onclick = () => {
        tasks.splice(taskidx, 1);    //删除第i个
        rendertask();
    };
    ctrlEl.append(bottEl);    //添加删除按钮









    return ctrlEl;

}
renderEditor();
rendertask();


