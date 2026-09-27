export const name="shift";
export const id="dl_45cc690658d5f7935058";
export const url=new URL("../icons/shift.svg?v=70e5632451bb1dd6298a523010c867bc3b76d09ee65013b86001dcc587263219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
