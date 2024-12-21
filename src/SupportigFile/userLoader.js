export const userLoader=async ()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok){
        throw Error("Data Not Found")
    }
    const data=await res.json();
    return data;
}

export const userSingleLoader=async ({params})=>{
    const {id}=params;
    const res=await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    if(!res.ok){
        throw Error("Data Not Fount in the Given ID")
    }
    const data=await res.json();
    return data;
}