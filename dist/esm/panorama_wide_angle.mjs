export const name="panorama_wide_angle";
export const id="dl_4c96f59d2008e88d6796";
export const url=new URL("../icons/panorama_wide_angle.svg?v=273ff7ef6232e42f49d4710dccfe598fbb6f299ae4d82a504fa0b60fb6b18603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
