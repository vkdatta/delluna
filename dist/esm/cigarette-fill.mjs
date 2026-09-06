export const name="cigarette-fill";
export const id="dl_6256e892dad442bc8819";
export const url=new URL("../icons/cigarette-fill.svg?v=54c826e65736b8c4c2dd874782ca1f94b2705deb8ddb275cb1532562149e44dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
