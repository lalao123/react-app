function sui(dispatch){
    fetch('/api/home')
    .then(res=>res.json())
    .then(res=>{
        dispatch({
            type:'liuyurong',
            payload:res.data
        })
    })
}
export default sui