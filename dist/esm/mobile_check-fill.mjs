export const name="mobile_check-fill";
export const id="dl_cb3bbf38dedd5ebde6db";
export const url=new URL("../icons/mobile_check-fill.svg?v=59d9506edf02e5871c142591a6c5c3d0d6cfa33cd28804dd67604bf05125c4ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
