export const name="width_wide";
export const id="dl_d563975a7a6dcff23df0";
export const url=new URL("../icons/width_wide.svg?v=103894b12be25a47f029f784d40e279e0f837afb39d80e818a0c8718463ff264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
