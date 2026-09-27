export const name="heart-break-bold";
export const id="dl_94b3c26baa5c421d9f8b";
export const url=new URL("../icons/heart-break-bold.svg?v=2705423166d596dba48a0e85af5f9199c525519ef5abf03929cd71db208aeb51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
