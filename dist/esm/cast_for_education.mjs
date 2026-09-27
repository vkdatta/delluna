export const name="cast_for_education";
export const id="dl_c211f893d1f365220233";
export const url=new URL("../icons/cast_for_education.svg?v=ad588d870c158e2ed0b0c90a8738ad743f8cb06eff5d77af131871a6449167e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
