export const name="padding-fill";
export const id="dl_8f6111dd2eff32fefa00";
export const url=new URL("../icons/padding-fill.svg?v=f055578dca634f80b4c1529864bb171a2802677734de5122452e5e77eebb02ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
