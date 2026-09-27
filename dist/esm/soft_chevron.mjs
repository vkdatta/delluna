export const name="soft_chevron";
export const id="dl_3d16a0a94721480392de";
export const url=new URL("../icons/soft_chevron.svg?v=feed0cbda09dd0a81f5cf1cdc3b818bad7eb38b2415c0f0bb974319ea7b2e525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
