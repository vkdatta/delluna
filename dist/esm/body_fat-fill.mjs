export const name="body_fat-fill";
export const id="dl_a6ad3a117ffde45cc53e";
export const url=new URL("../icons/body_fat-fill.svg?v=85a2712befe2994a2c30b2b5417a932837169318a26cd9ff169540f9578546ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
