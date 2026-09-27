export const name="electric_moped-fill";
export const id="dl_d7af3532ec4d1f71ba6a";
export const url=new URL("../icons/electric_moped-fill.svg?v=4d5fb75cbb6c14c7f930ce20509c8b8d8dd9ac76ae926beff80a93f0f26251cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
