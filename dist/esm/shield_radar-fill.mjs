export const name="shield_radar-fill";
export const id="dl_e17071aff287d56b5434";
export const url=new URL("../icons/shield_radar-fill.svg?v=464e4e733a2f42ff4a25e0a5b4287ab6fc29ee54aca04daa0b15c1e25ad2e57b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
