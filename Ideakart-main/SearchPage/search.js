const url = `https://morning-bastion-62431.herokuapp.com/api/product`

// when we click this function is invoke.
let s_click = async () =>{
    let searchs = document.getElementById('search').value;
    // console.log(searchs)
    document.getElementById('sResults').innerText = searchs;
    let res = await fetch(`${url}/?q=${searchs}&_limit=10`)
    res = await res.json()
    if (res.length == 0) {
        const noresult = document.getElementById('noresult');
        noresult.innerText = "No Results.."
        cont = document.getElementById('container');
        cont.textContent = null;
        
    }else { 

        randerDom(res)
        const noresult = document.getElementById('noresult');
        noresult.innerHTML = null
        console.log(res)
    }
}
// when we enter this function is invoke.
let search = document.getElementById('search')
search.addEventListener("keypress", async (e) => {
    try {
        let searchs = document.getElementById('search').value;

        if (e.key == "Enter") {
            document.getElementById('sResults').innerText = searchs;
            let res = await fetch(`${url}/?q=${searchs}&_limit=10`)
            res = await res.json()
            if (res.length == 0) {
                const noresult = document.getElementById('noresult');
                noresult.innerText = "No results.."
                cont = document.getElementById('container');
                cont.textContent = null;
            } else {
                const noresult = document.getElementById('noresult');
                noresult.innerHTML = null
                randerDom(res)
                console.log(res)
            }
        }
    } catch (error) {
        console.log(`error ${error}`)
    }
});

let userCard = ({ title, desc, image }) => {
    const pdiv = document.createElement('div');
    pdiv.classList.add("item")
    const cdiv1 = document.createElement('div');
    cdiv1.classList.add("childitem","childitem1")
    const cdiv2 = document.createElement('div');
    cdiv2.classList.add("childitem","childitem2")
    const img = document.createElement('img');
    img.classList.add("itemImage")
    const n = document.createElement('h2');
    n.classList.add("itemTitle")
    const des = document.createElement('p');
    des.classList.add("itemDesc")

    img.src = image;
    n.innerText = title;
    des.innerText = desc;
    cdiv1.append(n)
    cdiv2.append(img,des)
    pdiv.append(cdiv1,cdiv2)
    return pdiv;
}

let randerDom = (data) => {
    cont = document.getElementById('container');
    cont.textContent = null;
    data.forEach((el) => {
        let card = userCard(el)
        cont.append(card)
    })
}

const nsResult = document.getElementById('nsResult')
nsResult.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if (nsResult) {
            cont = document.getElementById('container');
            cont.textContent = null;
            const noresult = document.getElementById('noresult');
            noresult.innerText = "No result"
        }
    }
})

let searchValueData=JSON.parse(localStorage.getItem("searchValueData"))
let searchValue=JSON.parse(localStorage.getItem("searchValue"))
document.getElementById('sResults').innerText=searchValue;
document.getElementById('search').value=searchValue
if(searchValueData.length==0){
   
        const noresult = document.getElementById('noresult');
        noresult.innerText = "No Results.."  
}else{
    randerDom(searchValueData)
}

