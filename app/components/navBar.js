'use client'

 function onNavButtonClicked(elementID) {
    
    let left = document.getElementById(elementID).getBoundingClientRect().left;
    let top = document.getElementById(elementID).getBoundingClientRect().top;
    let w = document.getElementById(elementID).getBoundingClientRect().width;
    let h = document.getElementById(elementID).getBoundingClientRect().height;

    const hoverBG = document.getElementById("hoverBG");

    hoverBG.style.width = w;
    hoverBG.style.height = h;
    hoverBG.style.left = left;
    hoverBG.style.top = top;
}

export default function NavBar() {
    return(
    <div className="flex min-w-screen items-center justify-center my-3">
      <nav className="bg-amber-400 py-[1vh] px-[1vh]">
        <button id="button1" onClick={() => onNavButtonClicked("button1")} className="py-1 px-3 rounded-full transition-all hover:bg-amber-800">hello</button>
        <button id="button2" onClick={() => onNavButtonClicked("button1")} className=" py-1 px-3 rounded-full transition-all hover:bg-amber-800">hello</button>
        <button id="button3" onClick={() => onNavButtonClicked("button1")} className=" py-1 px-3 rounded-full transition-all hover:bg-amber-800">hello</button>

        <div id="hoverBG" className="bg-white absolute"></div>
      </nav>
      
    </div>
    );
}

