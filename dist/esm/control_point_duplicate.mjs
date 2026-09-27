export const name="control_point_duplicate";
export const id="dl_e9cb02dddf419b32c2ab";
export const url=new URL("../icons/control_point_duplicate.svg?v=778227e50ac8a0b6bb33cae69df2cb585f330d2fbb10203c7fb40c9d8898b5e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
