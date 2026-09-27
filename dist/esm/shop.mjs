export const name="shop";
export const id="dl_00a3680b72b26825c991";
export const url=new URL("../icons/shop.svg?v=0382518c4b05b75d8be66937be777de8d04b9f4a529d647108638252ecff568c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
