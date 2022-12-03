export async function NasaApiConnection(year){
    //set query
    let key="KVkPA5FyhDXZQG4qPWjvL2h0x1LV3qhaioAG0hJe";
    let date = year.toString() + "-12-25";
    let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`;

    //fetch data
    let res = await fetch(query);

    //turn result into json
    let data = await res.json();

    //return object
    return data
}