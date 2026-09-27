export const name="swipe-fill";
export const id="dl_85a298c39b896e235a30";
export const url=new URL("../icons/swipe-fill.svg?v=919d26cff24f79615c97ca2fdc24cb8c6995bae166cb215b4725486168710e6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
