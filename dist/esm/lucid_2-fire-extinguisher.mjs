export const name="lucid_2-fire-extinguisher";
export const id="dl_c95e9a284731469a8870";
export const url=new URL("../icons/lucid_2-fire-extinguisher.svg?v=861ccf6f5901f78964f09cdf1e07412c068c5f78b30d3ad9eb1c7fc7220710ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
