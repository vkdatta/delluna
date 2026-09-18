export const name="directions_boat-fill";
export const id="dl_9f41e33106794fefaaad";
export const url=new URL("../icons/directions_boat-fill.svg?v=3fad5f4e3393da3e64750ca9672439e21cd32d588bc80c1d568212db4c5b21c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
