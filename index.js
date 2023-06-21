let menu = document.querySelector(".menu");
let closedown  = document.querySelector(".close");
let search = document.querySelector(".inputsearch");
let random = Math.floor((Math.random()*7)) + 1;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5281526c4mshfc99f72b31822f1p158c17jsn3f3482a41862',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
// Give Features to Buttons
window.onload =async ()=>{
    let newImg =  random + ".jpg";
    // "Images/Banner/" +
    document.querySelector(".bannerImg").setAttribute("src" , newImg);
    switch (random){
        case 1:
        document.querySelector(".title").innerHTML = `Death <span class = "secondchar">Note</span>`
        document.querySelector(".about").innerHTML = "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it."
        break;
         case 2 :
        document.querySelector(".title").innerHTML = `Sex <span class = "secondchar">Education</span>`
        document.querySelector(".about").innerHTML = "A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school."
        break;
        case 3:
        document.querySelector(".title").innerHTML = `Wedne<span class = "secondchar">sday</span>`
        document.querySelector(".about").innerHTML = "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents."
        break;
        case 4 : 
        document.querySelector(".title").innerHTML = `Attack <span class = "secondchar">on titan</span>`
        document.querySelector(".about").innerHTML = "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction."
        break;
        case 5 :
        document.querySelector(".title").innerHTML = `Evil <span class = "secondchar">Dead</span>`
        document.querySelector(".about").innerHTML = "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable."
        break;
        case 6 :
         document.querySelector(".title").innerHTML = `Dare<span class = "secondchar">Devil</span>` 
        document.querySelector(".about").innerHTML = "A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil."
        break;
        case 7 :
         document.querySelector(".title").innerHTML = `Money<span class = "secondchar"> Heist</span>` 
         document.querySelector(".about").innerHTML = "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain."
        break;
        default:
    }

    // if(random === 1){
    //     document.querySelector(".title").innerHTML = `Death <span class = "secondchar">Note</span>`
    //     document.querySelector(".about").innerHTML = "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it."
    // }
    // else if(random === 2){
    //     document.querySelector(".title").innerHTML = `Sex <span class = "secondchar">Education</span>`
    //     document.querySelector(".about").innerHTML = "A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school."
    // }
    // else if(random === 3){
    //     document.querySelector(".title").innerHTML = `Wedne<span class = "secondchar">sday</span>`
    //     document.querySelector(".about").innerHTML = "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents."
    // }
    // else if(random === 4){
    //     document.querySelector(".title").innerHTML = `Attack <span class = "secondchar">on titan</span>`
    //     document.querySelector(".about").innerHTML = "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction."
    // }
    // else if(random === 5){
    //     document.querySelector(".title").innerHTML = `Evil <span class = "secondchar">Dead</span> Rise`
    //     document.querySelector(".about").innerHTML = "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable."
    // }
    // else{
    //     document.querySelector(".title").innerHTML = `Dare<span class = "secondchar">Devil</span>`
    //     document.querySelector(".about").innerHTML = "A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil."
    // }
    // console.log(newImg);
    // document.querySelector(".banner").style.backgroundImage =  "url(" + newImg + ")";
    // document.querySelector(".banner").style.backgroundImage = "linear-gradient(to bottom , red)";
     movies();
     series();
     cartoon();
     adult();
}
menu.addEventListener("click" , ()=>{
    document.querySelector(".dropdiv").style.top = "7%";
    setTimeout(()=>{
        closedown.style.display = "block";
        menu.style.display = "none";
},1000);
});
closedown.addEventListener("click" , ()=>{
    document.querySelector(".dropdiv").style.top = "-50%";
    setTimeout(()=>{
    closedown.style.display = "none";
    menu.style.display = "block";
    },1000);  
});
// Game Section
document.querySelector(".gamepad").addEventListener("click" , ()=>{
    document.querySelector(".game").style.top = "0%";
});
document.querySelector(".back").addEventListener("click" , ()=>{
    document.querySelector(".game").style.top = "-200%";
});
// Give Functinality to search button
search.addEventListener("focus", ()=>{
    // document.querySelector(".onsearch").style.opacity = "2";
    document.querySelector(".onsearch").style.display = "block";
    document.querySelector(".backbtn").style.display = "block";

});
document.querySelector(".backbtn").addEventListener("click" , ()=>{
    document.querySelector(".backbtn").style.display = "none";
    document.querySelector(".onsearch").style.display = "none";
let search = document.querySelector(".inputsearch").value = " ";
});
document.querySelector(".resposrch").addEventListener("focus" , ()=>{
    document.querySelector(".onsearch").style.display = "block";
});
// search.addEventListener("focusout", ()=>{
//     // document.querySelector(".onsearch").style.opacity = "2";
//     document.querySelector(".onsearch").style.display = "none";
// });
// document.querySelector(".backbtn").addEventListener("click" , ()=>{
//   document.querySelector(".onsearch").style.display = "none";

// })
search.addEventListener("keydown" , (e)=>{
    if(e.key === "Enter"){
        let getInput = document.querySelector(".inputsearch").value;
        document.querySelector(".pre").classList.add("fa-bounce");
        document.querySelector(".prehead").innerHTML = "Searching...."
        init("https://imdb8.p.rapidapi.com/auto-complete?q=" + getInput);
    }
});
document.querySelector(".resposrch").addEventListener("keydown" , (e)=>{
    if(e.key === "Enter"){
        let getInput = document.querySelector(".resposrch").value;
        document.querySelector(".pre").classList.add("fa-bounce");
        document.querySelector(".prehead").innerHTML = "Searching...."
        init("https://imdb8.p.rapidapi.com/auto-complete?q=" + getInput);
    }
});
// Fetching data from the server
async function init(url){
    try{
        let response = await fetch(url , options);
        let result = await response.json();
        let data =await  result.d[0];
        let image = await data.i.imageUrl;
        document.querySelector(".pre").classList.remove("fa-bounce");
        document.querySelector(".preload").style.display = "none";
        document.querySelector(".cast").innerHTML = data.s;
        document.querySelector(".ranking").innerHTML = data.rank;
        document.querySelector(".year").innerHTML = data.y;
        document.querySelector(".headtitle").innerHTML = data.l;
        document.querySelector(".whttype").innerHTML = data.qid;
        document.querySelector(".afterimg").setAttribute("src",image);
    }catch{
        document.querySelector(".prehead").innerHTML = "Sorry We Dont Have That!";
        // console.log("Sorry We Dont Have That!");
    }
}
const movies = async ()=>{
    let response = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=movies", options);
    let result = await response.json();
    let getdata = await result.d;
    let arr = [];
    for(let i=0;i<getdata.length;i++){
    let getsome = await result.d[i].i.imageUrl;
    arr.push(getsome);
    }
    arr.forEach(element => {
        let getdiv  = document.querySelector(".movies");
        let image = document.createElement("img");
        image.className = "loadimages";
        image.setAttribute("src",element);
        getdiv.append(image);
    });
}
const series = async ()=>{
    let response = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=tvseries", options);
    let result = await response.json();
    let getdata = await result.d;
    let arr1 = [];
    for(let i=0;i<getdata.length;i++){
        let getsome = await result.d[i].i.imageUrl;
        arr1.push(getsome);
        }
        arr1.forEach(element => {
            let getdiv  = document.querySelector(".tvseries");
            let image = document.createElement("img");
            image.className = "loadimages";
            image.setAttribute("src",element);
            getdiv.append(image);
        });
}
const cartoon = async ()=>{
    let response = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=kids", options);
    let result = await response.json();
    let getdata = await result.d;
    let arr2 = [];
    for(let i=0;i<getdata.length;i++){
        let getsome = await result.d[i].i.imageUrl;
        arr2.push(getsome);
        }
        arr2.forEach(element => {
            let getdiv  = document.querySelector(".cartoons");
            let image = document.createElement("img");
            image.className = "loadimages";
            image.setAttribute("src",element);
            getdiv.append(image);
        });
}
const adult = async ()=>{
    let response = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=adult", options);
    let result = await response.json();
    let getdata = await result.d;
    let arr3 = [];
    for(let i=0;i<getdata.length;i++){
        let getsome = await result.d[i].i.imageUrl;
        arr3.push(getsome);
        }
        arr3.forEach(element => {
            let getdiv  = document.querySelector(".adult");
            let image = document.createElement("img");
            image.className = "loadimages";
            image.setAttribute("src",element);
            getdiv.append(image);
        });
}