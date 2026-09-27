export const name="wand_stars";
export const id="dl_f884b4df2c4bfe9e6a91";
export const url=new URL("../icons/wand_stars.svg?v=268a6ed51f9168eeabea9b0d9b35d0ae5c88c0ff1feb56ad80512233a36e6fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
