let data=JSON.parse(localStorage.getItem("video"))
console.log(data.title,data.videoId)

let app=document.getElementById("container");
// app.innerHTML=null;
  let div=document.createElement("div")
  let box=document.createElement("div")
  box.setAttribute("id","box")
  let frame=document.createElement("iframe")
  frame.src=`https://www.youtube.com/embed/${data.videoId}`
  frame.setAttribute("id","fv")
  frame.allow="fullscreen"

  let nam=document.createElement("h2")
  nam.innerText=data.title
  box.append(frame)
   div.append(box,nam)

   app.append(div)

