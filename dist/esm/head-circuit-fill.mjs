export const name="head-circuit-fill";
export const id="dl_661531a5aff848dcb5d2";
export const url=new URL("../icons/head-circuit-fill.svg?v=1f8038e6cb1595fbbae97c027bed6e6e35592dcdbe107feff8aa3fa128ab2709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
