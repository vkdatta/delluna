export const name="frame_source-fill";
export const id="dl_38792f64bfa6a4a5d64d";
export const url=new URL("../icons/frame_source-fill.svg?v=6caf44a4daa784ca6ab97835908309848c157d9150d7be760330f77f02a79d94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
