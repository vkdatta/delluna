export const name="ambulance";
export const id="dl_ae704a91e8bd4bc6a6a7";
export const url=new URL("../icons/ambulance.svg?v=25a24285db45b6572e171618f85fdb771dd29b674344eb896a1d6e5ba390339f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
