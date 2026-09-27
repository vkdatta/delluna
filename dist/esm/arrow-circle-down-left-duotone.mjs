export const name="arrow-circle-down-left-duotone";
export const id="dl_6fbfd1eb7d2247b29b79";
export const url=new URL("../icons/arrow-circle-down-left-duotone.svg?v=e9fa879a770090bc671ab825f796fdcbf88766b84efacaa0e35d9c5be2f1095f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
