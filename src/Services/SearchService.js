export async function SearchDataInput(data,input) {

    const response = await fetch(
        "https://kitsu.io/api/edge/anime?filter[text]=" + input
        
    );
    return await response.json();
    
};