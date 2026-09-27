export const name="hourglass-medium-fill";
export const id="dl_d514f55a5f3645fa8a95";
export const url=new URL("../icons/hourglass-medium-fill.svg?v=253a201b9b3e764326835b9f872380f7b3da95275837b289df741c556b1c795b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
