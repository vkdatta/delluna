export const name="water_ph-fill";
export const id="dl_ad42d212b7a91e193b18";
export const url=new URL("../icons/water_ph-fill.svg?v=10a7b45065676910d1b1742e112d510c1b927a7c4965f774189b7472fe5da406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
