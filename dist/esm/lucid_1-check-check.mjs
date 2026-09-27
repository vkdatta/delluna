export const name="lucid_1-check-check";
export const id="dl_5aae1239dd184ad3bfc1";
export const url=new URL("../icons/lucid_1-check-check.svg?v=7597e5e4a110c8f71ffa9c5ea86e0f54014b8316822ce8b1590be5b2c9aca85c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
