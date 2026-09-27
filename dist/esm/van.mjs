export const name="van";
export const id="dl_0669eac682c7431599db";
export const url=new URL("../icons/van.svg?v=1495f706c96e7434274d96406272a2130726c81d629afef4c253789b4bd93cda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
