// //https://youtube.googleapis.com/youtube/v3/search?part=suggestions&key=AIzaSyAfD91xE67__K1YPOo_l53IDAFKzeg3TbI

const searchVideos =async () =>{
    try{
        const q=document.getElementById("query").value;
     const res =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}%202&key=AIzaSyAfD91xE67__K1YPOo_l53IDAFKzeg3TbI`)
     const data= await res.json();
     console.log(data.items)
     append(data.items)
    }
    catch(err){
        console.log(err)
    }

}

const append = (videos) =>{
 let show=document.getElementById("videos");
 show.innerHTML=null
 
 videos.forEach(({id: {videoId},snippet: {title,thumbnails:{default:{url}}}}) => {
        let div = document.createElement("div");
        div.setAttribute("id","box1")
        let box=document.createElement("div")
        box.setAttribute("id","box")
        let frame=document.createElement("img");
        frame.setAttribute("id","frame")
        frame.src=url;
        frame.allow="fullscreen"

        let name=document.createElement("h5")
        name.innerText=title;
      box.append(frame)
        div.append(box,name)

        div.onclick = ()=>{
            showvideo(data)
        }

        let data = {
            title,
            videoId,
        }
        show.append(div)
    });
};

const showvideo =(x) =>{
    
    localStorage.setItem("video",JSON.stringify(x))
    window.location.href="video.html"
}



const trend= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=series%2Cmovie%2Csong%2Cadventure&videoDuration=any&videoType=any&key=AIzaSyAfD91xE67__K1YPOo_l53IDAFKzeg3TbI`

fetch(trend)
.then((res)=>{
    return res.json()
})
.then((res)=>{
    append(res.items)
})
.catch((err)=>{
  console.log("err:",err)
})