export const name="exposure_neg_2-fill";
export const id="dl_4efba281a1686dadce4d";
export const url=new URL("../icons/exposure_neg_2-fill.svg?v=b6173a3d1e8f4c9384af859f1a3d9ab4e0fdbaa5b56b7aec4e79d6217958cc8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
