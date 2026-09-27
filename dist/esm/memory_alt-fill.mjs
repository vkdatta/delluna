export const name="memory_alt-fill";
export const id="dl_87799bb2e842f056ee52";
export const url=new URL("../icons/memory_alt-fill.svg?v=b6a8e1b586bcedf003654bd81c181a2c86556a5ef4f0f80fd78b3826899486fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
