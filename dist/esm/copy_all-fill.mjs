export const name="copy_all-fill";
export const id="dl_8d59b76c2bc9962c62ba";
export const url=new URL("../icons/copy_all-fill.svg?v=8b75ea914a6ef4652305898e338b85c438b717d40b39e7d71d4028ed31bf4d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
