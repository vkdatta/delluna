export const name="hourglass_check";
export const id="dl_2fc768bafb78a19b4cf4";
export const url=new URL("../icons/hourglass_check.svg?v=4660e0437d6d9dda9f0b9a000b37237c12733b97488199188769f99422d12de8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
