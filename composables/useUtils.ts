export const useUtils=()=>{
    const sayhello=(value:string)=>{
        console.log("hello from userUtils");
        return `composable returns ${value}`;
    }
    return{
        sayhello,
    };
}