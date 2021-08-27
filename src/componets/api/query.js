export const getMemes = async ()=> {
    try{
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        return data;
    } catch(error){
        console.log('message:', error);
    }
}