import supaBase from "./config.js";


let lEmail = document.getElementById("email");
let lPass = document.getElementById("password");
let lBtn = document.querySelector("#login-btn input");


 async function login(e){
    e.preventDefault();

    if (lEmail.value === "admin@gmail.com" && lPass.value === "admin12345") {
      location.href = "dashboard.html";
      return;
    }

   try {
    const { data, error } = await supaBase.auth.signInWithPassword({
     email: lEmail.value,
     password: lPass.value,
  })

    if (error){
      console.log (error);
       Swal.fire({
  title: "login Failed!" ,
  text: error.message,
  icon: "error",
  draggable: true
})
return;
    }else {
       Swal.fire({
  title: "successfully login to your account!" ,
  icon: "success",
  draggable: true
}).then ( ()=> {
   location.href = "home.html"
})

    }
   } catch (err) {
    console.log(err)
   }
 }


lBtn && lBtn.addEventListener ("click", login)
