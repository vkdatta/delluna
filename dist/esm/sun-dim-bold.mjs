export const name="sun-dim-bold";
export const id="dl_e8d9658a456448a3a74a";
export const url=new URL("../icons/S/sun-dim-bold.svg?v=06f48244b02f916d8b30cb29f64de0d59817579815c24ab5f212bedc4bf3ff9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
