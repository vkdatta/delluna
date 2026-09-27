export const name="share_off-fill";
export const id="dl_dc95c0cc8a0539a56b39";
export const url=new URL("../icons/share_off-fill.svg?v=dd5ac156da4b60ad910569d8e36c11745f0992ba9f7af389251133f8b0675a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
