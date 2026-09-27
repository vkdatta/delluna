export const name="lucid_3-mirror-round";
export const id="dl_71b922cc747d4ff9a9b7";
export const url=new URL("../icons/lucid_3-mirror-round.svg?v=dc43f273cb91015a145b65967346d4599df58a91f968a216edf60d688f20a259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
