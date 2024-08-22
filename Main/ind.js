
let ne = document.querySelectorAll(".new");
let imp = document.querySelectorAll(".imp");
let task = document.querySelectorAll(".task");
let cl = document.querySelector(".main");
let se = document.querySelector(".searchin");
let menu = document.querySelector(".menu");
let nota = document.querySelector(".notas");

let arr = [];

ne.forEach((ne) => {
    ne.addEventListener("click", () => {
        let newdiv = document.createElement("div");
        let gh = document.createElement("input");
        let ico = document.createElement("i");
        let b = document.createElement("span");
        let t = document.createElement("span");
        let textarea = document.createElement("textarea");
        let dte = document.createElement("input") ;
        dte.classList.add("dtem")
        textarea.classList.add("jk") ;
        newdiv.classList.add("mai");
    

        gh.type = "checkbox";
        dte.type = "date" ;
        dte.style.width = "18px" ;
        dte.style.height = "28px" ;
        dte.style.marginLeft = "8px" ;
        dte.style.marginBottom = "10px" ;

        ico.classList.add("fa", "fa-solid", "fa-trash", "hi");

        t.innerHTML = "Description&#x2B07";
        t.style.cursor = "pointer"; 
        

        
        textarea.style.height = "100px";
        textarea.style.resize = "none";
        textarea.style.display = "none";
        textarea.style.fontSize = "21px"; 

        let bh = document.createElement("input");
        bh.type = "text";
        bh.placeholder = "Add A Task";
        bh.classList.add("jk");

        b.innerText = "Completed";
        b.style.visibility = "hidden";
        b.style.marginLeft = "8px" ;
        b.classList.add("mai") ;


        newdiv.append(ico, gh,dte, bh,t,b, textarea);
        newdiv.style.height = "auto" ;
        cl.append(newdiv);

        
        dte.addEventListener("change", () => {
            let selectedDate = new Date(dte.value);
            let today = new Date();

      
            if (selectedDate < today && selectedDate.toDateString() !== today.toDateString() ) {
                alert("The selected date cannot be in the past!");
                dte.style.borderBlockColor = "Red" ;
                dte.style.borderWidth = "2px" ;
                dte.style.opacity = "0.5" ;
                
            } else if (
            selectedDate.getFullYear() === today.getFullYear() &&
            selectedDate.getMonth() === today.getMonth() &&
            selectedDate.getDate() === today.getDate()) {
                alert("The selected date is today!");
                dte.style.opacity = "1" ;
                
            }

            else{
                dte.style.borderBlockColor = "Blue" ;
                dte.style.borderWidth = "2px" ;
                dte.style.opacity = "1" ;
            }
        });

        t.addEventListener("click", () => {
            if (textarea.style.display === "none") {
                textarea.style.display = "block";
                newdiv.style.height = "auto"; 
                textarea.classList.add("stye") ;
                
            } else {

                textarea.style.display = "none";
                newdiv.style.height = "auto";
                
                
            }
        });
        

        arr.push(bh.value);

        gh.addEventListener("change", () => fun(b, gh, bh,textarea,newdiv));
        nota.style.display = "none";
        
        ico.addEventListener("click", () => {
            newdiv.remove();
            arr.pop();

            if (arr.length === 0) {
                nota.style.display = "block";
            }
        });

        se.addEventListener("input", () => {
            let bhu = se.value.toLowerCase();
            let tasksec = document.querySelectorAll(".mai");

            tasksec.forEach((tasks) => {
                let tasktex = tasks.querySelector("input[type='text']").value.toLowerCase();
                if (bhu !== "") {
                    if (tasktex.startsWith(bhu)) {
                        tasks.style.display = "block";
                    } else {
                        tasks.style.display = "none";
                    }
                }

                else{
                    tasks.style.display = "block" ;
                }
            });
        });
    });
});


task.forEach((task) => {
    task.addEventListener("click", () => {
        let tasksec = document.querySelectorAll(".mai");
        se.value = "";
        tasksec.forEach((tasks) => {
            tasks.style.display = "block";
        });

        let cs = document.querySelector(".sidebar");
        let css = document.querySelector(".mains");

        cs.style.display = "none";
        menu.style.display = "block";
        css.style.display = "block";
    });
});

menu.addEventListener("click", () => {
    let cs = document.querySelector(".sidebar");
    let css = document.querySelector(".mains");

    cs.style.display = "";
    menu.style.display = "none";
    css.style.display = "grid";
});

function fun(b, gh, bh,textarea,newdiv) {
    if (gh.checked) {
        bh.disabled = true;
        b.style.visibility = "visible";
        textarea.disabled = true;
        textarea.style.display = "block" ;
        newdiv.style.height = "auto" ;
        textarea.classList.add("stye") ;
    } else {
        bh.disabled = false;
        b.style.visibility = "hidden";
        textarea.disabled = false;
    }
}

function onclicks() {
    textarea.style.display = "none";
                newdiv.style.height = "auto"; 
}