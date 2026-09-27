export const name="fiber_smart_record-fill";
export const id="dl_0fb2892818e17f466e6d";
export const url=new URL("../icons/fiber_smart_record-fill.svg?v=9c346018a49eb7ba5ebb094bbbeaff3718c90164be6ffc8a735de6070b991b9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
