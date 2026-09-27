export const name="exclamation-fill";
export const id="dl_6a24bf2377ad3a26d8b2";
export const url=new URL("../icons/exclamation-fill.svg?v=7769fc3bc07172dbabc2acf08baaf2e9d1a270c70bbc9351260710b1c6ff7420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
