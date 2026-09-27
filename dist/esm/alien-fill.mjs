export const name="alien-fill";
export const id="dl_815b2d45c4cd4276812a";
export const url=new URL("../icons/alien-fill.svg?v=24c9dd2e61c4fd39a27e303024a6aedadd952021234efbaa946b0855bf98041b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
