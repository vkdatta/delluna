export const name="lucid_1-backpack";
export const id="dl_3f81dc893ee748a7b856";
export const url=new URL("../icons/lucid_1-backpack.svg?v=46463b948719f0a286fb13b7a47b4df5b8b0a5793f207d88f56a94e7d92d5766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
