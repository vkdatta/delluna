export const name="specific_gravity";
export const id="dl_6866a800c8291bc355d4";
export const url=new URL("../icons/specific_gravity.svg?v=6c4eb33bd791336f920adeba631e4f9cff732517bd1817ea9906fac0b3b3e32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
