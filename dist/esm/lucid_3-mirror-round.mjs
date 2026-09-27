export const name="lucid_3-mirror-round";
export const id="dl_71b922cc747d4ff9a9b7";
export const url=new URL("../icons/lucid_3-mirror-round.svg?v=37bd42127f3015b246b2d5edd46b0aa3d61e47cbca74491e6d645e397149ad8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
