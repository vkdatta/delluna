export const name="vr180_create2d-fill";
export const id="dl_7100fa27a0c210cdc645";
export const url=new URL("../icons/vr180_create2d-fill.svg?v=c84af48ae9a9b6064fe38b7219d54aab58acde8cec5737026b8e32d0d5dbf578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
