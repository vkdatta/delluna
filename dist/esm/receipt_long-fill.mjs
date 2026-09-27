export const name="receipt_long-fill";
export const id="dl_74f8c5200876aaba2bff";
export const url=new URL("../icons/receipt_long-fill.svg?v=d21bd8f6b39f87900b43c68c6529e22343568d27ec621eb48ba1df98752b507c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
