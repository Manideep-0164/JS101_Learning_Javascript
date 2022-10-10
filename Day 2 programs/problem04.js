//Problem 4: Given stored username and password and input username and password, Print if the user can log in or not.
let dt_user="mani";
let dt_pass="123a";
let user="mani";
let pass="123a";
if(dt_user==user)
{
  if(dt_pass==pass)
  {
    console.log("login successful");
  }
  else console.log("Incorrect Password");
}
else console.log("Incorrect username");
