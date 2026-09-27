export const name="dermatology-fill";
export const id="dl_c9ae1dc87f037b2d0b09";
export const url=new URL("../icons/dermatology-fill.svg?v=a3cb8167813b0203c5fda681ed8a40ae7c43d8c8b57e8ffe605ffb355ff61081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
