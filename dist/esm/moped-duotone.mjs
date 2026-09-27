export const name="moped-duotone";
export const id="dl_9218567d66c04b54be62";
export const url=new URL("../icons/moped-duotone.svg?v=dca00e5443ee75ef640ae24e7c692a96f2363e3071d5ab986ad5906f65c0cd11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
