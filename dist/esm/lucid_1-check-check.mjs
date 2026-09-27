export const name="lucid_1-check-check";
export const id="dl_5aae1239dd184ad3bfc1";
export const url=new URL("../icons/lucid_1-check-check.svg?v=b836082cb04417d8e92c4e69b2dbaf47587cc427be811b1dc896e6dc20f3c94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
