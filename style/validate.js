function validate()
    {
        var username = document.getElementById("exampleInputEmail1");
        var password = document.getElementById("exampleInputPassword1");
        
        if(username.value.trim().length==0)
        {
            alert("Enter valid Email Id");
        }
        else if(password.value.trim().length<7)
        {
    
            alert("Enter valid password");
        }
       
    }