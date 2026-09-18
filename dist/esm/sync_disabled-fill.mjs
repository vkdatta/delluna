export const name="sync_disabled-fill";
export const id="dl_13145772e7a04c16874a";
export const url=new URL("../icons/sync_disabled-fill.svg?v=a458220c501aaefb9bc66a5ab947f0413a343245f43450f98b5b3716f26e6321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
