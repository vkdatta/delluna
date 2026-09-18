export const name="web_asset_off-fill";
export const id="dl_dcab09b6120f4d64bb92";
export const url=new URL("../icons/web_asset_off-fill.svg?v=85fc9d34497f5279c68bd35faf37fa191c9e0081943c226d00b90f4718cd4090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
