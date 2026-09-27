export const name="backpack-bold";
export const id="dl_4f4d422d433743b6a126";
export const url=new URL("../icons/backpack-bold.svg?v=51264db1a62111024931cdb3fdaa6ad1c0ba83eea46fa2ad30342c1f0bc91478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
