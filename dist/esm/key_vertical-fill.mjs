export const name="key_vertical-fill";
export const id="dl_58f88db7a0225f8677ab";
export const url=new URL("../icons/key_vertical-fill.svg?v=2f5a060cd1cdda0a3eeb98f1d297360c9990a49665fa5fa11b48a724e75d2ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
