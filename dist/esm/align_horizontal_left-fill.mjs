export const name="align_horizontal_left-fill";
export const id="dl_ee787e0a9e6f2abbc27b";
export const url=new URL("../icons/align_horizontal_left-fill.svg?v=3bd4c60626d02230bcd90119ca15154e69f4153d2bc178b6aa3d50b4a7e36ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
