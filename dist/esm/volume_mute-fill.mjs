export const name="volume_mute-fill";
export const id="dl_dbd3b21f399c90b249ed";
export const url=new URL("../icons/volume_mute-fill.svg?v=ca88479e4d1544e649fa5787254ff10de3e68c825a885e66f7ae88d1e7a35dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
