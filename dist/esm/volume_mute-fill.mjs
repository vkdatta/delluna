export const name="volume_mute-fill";
export const id="dl_7cdb92c245106a675d3a";
export const url=new URL("../icons/volume_mute-fill.svg?v=2820f68eff9f5a3c23bce1e49e1afa410ad24213e1ce85de65972be5d8712026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
