export const name="steppers-fill";
export const id="dl_4b0ab248be7f5f3cbdc4";
export const url=new URL("../icons/steppers-fill.svg?v=9a22c6adfddb8a5d0abf149509456d8de2423fa2d2df5748c9a53f318e616f13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
