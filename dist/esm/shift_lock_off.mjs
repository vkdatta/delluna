export const name="shift_lock_off";
export const id="dl_c74bd577ff1244a6b9fd";
export const url=new URL("../icons/S/shift_lock_off.svg?v=92467edf19d00d794305579131dd6fe4920e26165412e36ced9abfc9b7b25342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
