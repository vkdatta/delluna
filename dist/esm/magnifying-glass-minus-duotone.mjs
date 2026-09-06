export const name="magnifying-glass-minus-duotone";
export const id="dl_ffc05836b1184f6599e2";
export const url=new URL("../icons/magnifying-glass-minus-duotone.svg?v=21e5cb91d1c55c5b90218feab38ab00f387adf789c89eeb99decfa2eb3f92fda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
