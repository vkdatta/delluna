export const name="raw_on-fill";
export const id="dl_b1aa0a9f94c8b286419f";
export const url=new URL("../icons/raw_on-fill.svg?v=450aa038a90342fa3b59dd78f8579e284ec69b375edd3b06cc256a00167c393d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
