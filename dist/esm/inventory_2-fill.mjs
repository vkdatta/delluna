export const name="inventory_2-fill";
export const id="dl_e6ef4a4a91afba828003";
export const url=new URL("../icons/inventory_2-fill.svg?v=4213ce7156dc0caae5cf6c4ef44b686fa3ecb1b248b45627d796835366ddf344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
