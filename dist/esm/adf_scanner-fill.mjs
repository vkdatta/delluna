export const name="adf_scanner-fill";
export const id="dl_4bf4fed08b1a4b27ba44";
export const url=new URL("../icons/A/adf_scanner-fill.svg?v=289ccc14a28dae483682affa450bc7ed065723d83c33e2115f79331943ce8dff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
