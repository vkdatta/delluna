export const name="lucid_3-printer";
export const id="dl_28997569ec174f92be79";
export const url=new URL("../icons/lucid_3-printer.svg?v=5b3ff6f30b567f0055c477fec82b3678258881bdb88ef2062503f7263a518b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
