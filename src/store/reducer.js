function fun(state,action){
    // console.log(action)
    switch(action.type){
        case 'setitem':{
            // console.log("qian",state)
            let arr = [...state.list];

            arr.push(action.payload);
            return Object.assign(state,{list:arr});
        }
        case 'liuyurong':{
            return Object.assign({},state,{lala:action.payload})
        }
        default:{
            return state
        }

    }
}
export default fun;