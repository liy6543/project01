function $(id){return document.getElementById(id)}
                function submitTest(){
                    var msg = "Name:"+$("name").value;
                    msg+="\n Phone:"+$("phone").value;
                    msg+="\n Email:"+$("email").value;
                    msg+="\n Message:"+$("message").value;
                    alert(msg);
                    return false;
                }
            function resetTest(){alert("reset");}