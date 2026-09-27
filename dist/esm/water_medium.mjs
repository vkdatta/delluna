export const name="water_medium";
export const id="dl_1baf65d1d99977b62c79";
export const url=new URL("../icons/water_medium.svg?v=df99387ef167a91b461686bda5f8ae274ed25c46130176f5802473fb51d56630",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
