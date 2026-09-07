export const name="upload-simple-fill";
export const id="dl_b8a1e42435d44baea543";
export const url=new URL("../icons/U/upload-simple-fill.svg?v=3d1c38449725c61048e136e7ab491b020fbf92bffc5581c3abf59b363323d8af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
