export const name="brand_awareness-fill";
export const id="dl_73a9c0004bdb47279551";
export const url=new URL("../icons/brand_awareness-fill.svg?v=0f6bb51816b16f01dc030b89edd220cb6f5d9f8b5bffedb3c88e9158aa5b834d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
