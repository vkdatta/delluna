export const name="not-subset-of-bold";
export const id="dl_12e32fc06b3c4f64a423";
export const url=new URL("../icons/not-subset-of-bold.svg?v=d99c21bb220409ffac99e46b6dec11cbdcbe0ccbdf640224974fd39c27a2d94c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
