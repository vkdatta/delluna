export const name="back_hand-fill";
export const id="dl_6d0123452c8a499b9260";
export const url=new URL("../icons/back_hand-fill.svg?v=aadf69d4d0bbccc55e9acc23129a583c3853fe0c595598dc033e56974de43e42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
