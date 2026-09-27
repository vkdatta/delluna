export const name="lock_open_circle-fill";
export const id="dl_0b54a0efb36aa45b0567";
export const url=new URL("../icons/lock_open_circle-fill.svg?v=2b36478c21b327495a0de94fc44abbad99b63b1109c5fa8332dcbb99788aee14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
