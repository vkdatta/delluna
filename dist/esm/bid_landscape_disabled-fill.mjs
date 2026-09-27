export const name="bid_landscape_disabled-fill";
export const id="dl_bab05e8393a637d216a5";
export const url=new URL("../icons/bid_landscape_disabled-fill.svg?v=7df4d2c0c7482352449c9a26e484c274490d5ddd82beb0ac9384116b947db4e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
