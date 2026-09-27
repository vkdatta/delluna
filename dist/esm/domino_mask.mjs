export const name="domino_mask";
export const id="dl_5a5ac19766cd1ede2a5c";
export const url=new URL("../icons/domino_mask.svg?v=5278a71674e956d6c9e61852e25ff4cc2cc479d99bdfed9afa8bab5ff648aff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
