export const name="wash";
export const id="dl_3643b16ade61cca76735";
export const url=new URL("../icons/wash.svg?v=941b607b9526e20d5e2f7a2ac49d665f3b7a17a5c77c6c2cf0e9288e95ced5c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
