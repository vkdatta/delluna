export const name="tire_repair";
export const id="dl_f7387f2d5fb2d5d77f14";
export const url=new URL("../icons/tire_repair.svg?v=019ecf97204ea0eef06f13314f7492eb90377b1249dee3f267ec9b0ccc55a2d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
