export const name="cross-bold";
export const id="dl_22302209a4614a1bb538";
export const url=new URL("../icons/cross-bold.svg?v=2728a01c4d85e9247df901d2c5b2b3fba9c5893cda9d6b97780c0dcc5ab4ed8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
