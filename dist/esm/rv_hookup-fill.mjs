export const name="rv_hookup-fill";
export const id="dl_d33c8e0988e6b7aa7b3a";
export const url=new URL("../icons/rv_hookup-fill.svg?v=843ffb20f688ccb51960f6ec6a9f2490427fb3bd20d02aef4f03be3ba5627e22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
