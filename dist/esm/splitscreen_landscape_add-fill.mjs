export const name="splitscreen_landscape_add-fill";
export const id="dl_0cccfa95e79257e77f7d";
export const url=new URL("../icons/splitscreen_landscape_add-fill.svg?v=cc9c29db40ca2e774881c43eb739684ce5e753826491b6cab067999d2b102588",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
