const initialData={
    name:'ramesh kumar mahato'
}

const StudentReducer=(state=initialData,action)=>{  
    switch(action.type){
        case 'name':
            return {
                name:action.payload
            }
        default:
            return state
    }
}

export default StudentReducer