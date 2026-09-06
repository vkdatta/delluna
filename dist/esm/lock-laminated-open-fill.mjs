export const name="lock-laminated-open-fill";
export const id="dl_5e052d22113741c0b7fd";
export const url=new URL("../icons/lock-laminated-open-fill.svg?v=f94c210d832cb7500a66ebe41dd6c09614ea52cf8d3a4edf7352199712e49575",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
