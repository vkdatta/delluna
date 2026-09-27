export const name="shrimp";
export const id="dl_0b7c6db6ab473cb9d4d6";
export const url=new URL("../icons/shrimp.svg?v=84feae19a9d3bbcb9ded262ecc587e376f5e2a846dbee1da01a4910c99e8eeed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
