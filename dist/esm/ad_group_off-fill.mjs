export const name="ad_group_off-fill";
export const id="dl_60f1e6f7d2dbb9ee7acb";
export const url=new URL("../icons/ad_group_off-fill.svg?v=d87ad57578f329dfb3dceab4422e387b11dafed249d5ba5b904f1208d7a64413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
