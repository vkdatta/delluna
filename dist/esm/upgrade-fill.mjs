export const name="upgrade-fill";
export const id="dl_442330b811404cafb692";
export const url=new URL("../icons/U/upgrade-fill.svg?v=2ea4821d9bc270dc604f132ed95643f8c54e2bdaab26934ae0defd9903559462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
