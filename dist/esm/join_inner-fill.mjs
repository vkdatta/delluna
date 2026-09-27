export const name="join_inner-fill";
export const id="dl_fde899e20e68c96bae91";
export const url=new URL("../icons/join_inner-fill.svg?v=13a116486eeac6eaab95c7c2c8fa6c479bd9a6624c254df2cdbad37ddd7ec4cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
