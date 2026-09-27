export const name="horizontal_align_center-fill";
export const id="dl_ad01235b20414b67bb2d";
export const url=new URL("../icons/horizontal_align_center-fill.svg?v=12de3d2da1a03b55e510c5bdf610495f3e0a56c64b4d180f194a5a7f52eb3169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
