const url=`https://morning-bastion-62431.herokuapp.com/api/product`

// when we click this function is invoke.
let s_click=async()=>{
let searchs=document.getElementById('search').value;
let res=await fetch(`${url}/?q=${searchs}`)
res=await res.json()
console.log(res)
}
// when we enter this function is invoke.
let search=document.getElementById('search')
search.addEventListener("keypress",async(e)=>{
    if(e.key=="Enter"){
        let searchs=document.getElementById('search').value;
let res=await fetch(`${url}/?q=${searchs}`)
        res=await res.json()
        console.log(res)
    }
});
