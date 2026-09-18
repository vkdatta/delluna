export const name="view_in_ar";
export const id="dl_45e4c68ea32d4434948b";
export const url=new URL("../icons/view_in_ar.svg?v=9c31c175b0ac2b6b1c1f3ca1b74d973c0c70cdc750e528c32b7ee17c4ef8c467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
