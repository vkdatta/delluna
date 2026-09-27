export const name="mode_fan";
export const id="dl_4c6ea8410fc2d95138ea";
export const url=new URL("../icons/mode_fan.svg?v=790ed0fe4968964ee30c0944158421efc5a3e567f38f13b547f116b28a3450d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
