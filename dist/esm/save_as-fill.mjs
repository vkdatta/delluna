export const name="save_as-fill";
export const id="dl_c10c0e4a0c0e5567a03d";
export const url=new URL("../icons/save_as-fill.svg?v=8ed1ba535c231b3ff3da55108be50fa472d516a8420b0cb445f015c002d18992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
