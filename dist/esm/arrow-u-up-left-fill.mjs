export const name="arrow-u-up-left-fill";
export const id="dl_58d0b9de28eb494a96ca";
export const url=new URL("../icons/arrow-u-up-left-fill.svg?v=e18b66f54c330189b6309462d27f91fcb3413655238f2374538d8b2849d19722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
