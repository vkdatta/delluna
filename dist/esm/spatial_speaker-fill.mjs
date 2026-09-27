export const name="spatial_speaker-fill";
export const id="dl_8863f43145ba9a190f32";
export const url=new URL("../icons/spatial_speaker-fill.svg?v=a694fca0287dcca9f33278bb90c802fd062629da5f1c738b537242e4f526b00d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
