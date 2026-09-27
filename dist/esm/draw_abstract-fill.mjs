export const name="draw_abstract-fill";
export const id="dl_e87b5ec0eda62ddf5cdb";
export const url=new URL("../icons/draw_abstract-fill.svg?v=460c6b8869762dab01476987234c26c4b992da185c62dadb731f13edcbfeb1d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
