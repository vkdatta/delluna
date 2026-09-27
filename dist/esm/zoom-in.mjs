export const name="zoom-in";
export const id="dl_614dc6b10a5549b6b705";
export const url=new URL("../icons/zoom-in.svg?v=51994600f070bceb7c3f826b6b41e974d229253d90f98fd221d031e427aa8432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
