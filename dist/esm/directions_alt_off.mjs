export const name="directions_alt_off";
export const id="dl_d273a1ad8573c990768b";
export const url=new URL("../icons/directions_alt_off.svg?v=dc9574e4a70a4bde1b9cf6d742eb67019c8f014b058f410f3742d3c2aa8299b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
