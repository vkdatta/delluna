export const name="bold-plus";
export const id="dl_45bf5ba337aa6ce9826d";
export const url=new URL("../icons/bold-plus.svg?v=9b958b499e58e907fe7a0e17428786faef4aeb0e92e82b85b1c713888ec83a5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
