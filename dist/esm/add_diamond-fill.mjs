export const name="add_diamond-fill";
export const id="dl_2636fcecb312df9f5ae8";
export const url=new URL("../icons/add_diamond-fill.svg?v=6403eaf0accaa6b49d86602fda1b2dd05eb26d546e6c1df0236e2a3d1152bc94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
