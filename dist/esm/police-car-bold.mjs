export const name="police-car-bold";
export const id="dl_dd8ce6d26166472daca4";
export const url=new URL("../icons/police-car-bold.svg?v=a81f4cb0b955a6ff71f8fab5ae43845e8432648df8f23fbf277ca2a8975bf9e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
