export const name="dress-bold";
export const id="dl_97aac736a4a34e088f59";
export const url=new URL("../icons/dress-bold.svg?v=38a01b14cd51bc19e2ec1bacd4555936f7816b9981f4fbb0840ff345ef978fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
