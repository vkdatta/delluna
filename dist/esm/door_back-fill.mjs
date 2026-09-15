export const name="door_back-fill";
export const id="dl_d649548934b247ec9908";
export const url=new URL("../icons/D/door_back-fill.svg?v=670322a9d60130ba5d6f407a07dcf71ea805a361b1f430ee54015d1de08e0b38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
