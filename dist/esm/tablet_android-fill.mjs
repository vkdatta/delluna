export const name="tablet_android-fill";
export const id="dl_90d9513825507ece5004";
export const url=new URL("../icons/tablet_android-fill.svg?v=883f255e56e8cd7b386ab68b2619541ecae571c6f4c337092bfa4d55c58ef1a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
