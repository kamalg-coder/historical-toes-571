const url = `https://morning-bastion-62431.herokuapp.com/api/product`

// when we click this function is invoke.
let s_click = async () => {
    let searchs = document.getElementById('search').value;
    let res = await fetch(`${url}/?q=${searchs}&_limit=5`)
    res = await res.json()
    console.log(res.length)
    randerDom(res)
}
// when we enter this function is invoke.
let search = document.getElementById('search')
search.addEventListener("keypress", async (e) => {
    if (e.key == "Enter") {
        let searchs = document.getElementById('search').value;
       let res = await fetch(`${url}/?q=${searchs}`)
        res = await res.json()
        randerDom(res)
        console.log(res.length)
    }
});

let userCard = ({ title, desc, image }) => {
    const div = document.createElement('div');
    div.classList.add("item")
    const img = document.createElement('img');
    img.classList.add("itemImage")
    const n = document.createElement('h2');
    n.classList.add("itemTitle")
    const des = document.createElement('p');
    des.classList.add("itemDesc")

    img.src = image;
    n.innerText = title;
    des.innerText = desc;

    div.append(n, img, des)
    return div;
}

let randerDom = (data) => {
    cont = document.getElementById('container');
    cont.textContent = null;
    data.forEach((el) => {
        let card = userCard(el)
        cont.append(card)
    })
}


