export const name="aq_indoor-fill";
export const id="dl_1bd4f854f0ab4ab4ada4";
export const url=new URL("../icons/aq_indoor-fill.svg?v=6a0a864eada216d6cfd66b50737ec790274d2e6017f63f088239276ef0ff028b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
