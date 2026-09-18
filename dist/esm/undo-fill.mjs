export const name="undo-fill";
export const id="dl_64e5fdc55bd94a1a8b02";
export const url=new URL("../icons/undo-fill.svg?v=2ca984f54cdfab8744ed174b856428ff02c445917689c181b0fdd2a0f2a5f11e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
