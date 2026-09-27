export const name="eco-fill";
export const id="dl_665298d3559177864b12";
export const url=new URL("../icons/eco-fill.svg?v=6156f04c353429e22cfd8b11ac0968220ec4b5624685cf6b3e380f5bc6646aee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
