export const name="lucid_3-move-down-right";
export const id="dl_817b1f6ccdce4a97a48e";
export const url=new URL("../icons/lucid_3-move-down-right.svg?v=d225f54c9ca4741f78116be0a4ea0621e608a2a034a1229b8f82bce9b9155bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
