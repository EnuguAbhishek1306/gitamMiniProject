let selectedDiv = "";
let x = document.getElementsByClassName('optionsecoptions')
            for (let i = 0; i < x.length; i++) {
                x[i].addEventListener("click", function(){
                    
                let selectedEl = document.querySelector(".selected");
                if(selectedEl){
                    selectedEl.classList.remove("selected");
                }
                this.classList.add("selected");
                    
                }, false);;
            }
            let y = document.getElementsByClassName('time')
            for (let i = 0; i < x.length; i++) {
                y[i].addEventListener("click", function(){
                    
                let selEl = document.querySelector(".sel");
                if(selEl){
                    selEl.classList.remove("sel");
                }
                this.classList.add("sel");
                    
                }, false);;
            }
            

            
            document.getElementById('confirmBtn').addEventListener('click',function(){
                
                let selectedEl = document.querySelector(".selected");
                let selEl=document.querySelector(".sel");
                if(selectedEl !=null && selEl!= null)
                    window.location.href="new.htm"
                    
                       
                else
                    alert('Please select Date and Time')
            })
             const leftsidebox = document.getElementById('leftsidebox');
             