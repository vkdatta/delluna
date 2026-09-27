export const name="rewarded_ads-fill";
export const id="dl_1af69b160d036ae364d1";
export const url=new URL("../icons/rewarded_ads-fill.svg?v=b5bc20e29d35bee0c04741fd5cfb9fb8a7794d63bb0a6a6518b949978a1c29c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
