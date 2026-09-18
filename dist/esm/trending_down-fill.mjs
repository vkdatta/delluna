export const name="trending_down-fill";
export const id="dl_d8c752e96afe42b68636";
export const url=new URL("../icons/trending_down-fill.svg?v=5aa7080c0f9a2e1d81381c7260bacbf455a905b0ea10f88beeed43e944cf0765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
