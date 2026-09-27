export const name="lucid_3-rocket";
export const id="dl_cca799e75e2f4afcaa05";
export const url=new URL("../icons/lucid_3-rocket.svg?v=426898b4fd79b5a5965b5e5c8a60a95f1f4eeff4f56c4db1aa01313e3bd2c4bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
