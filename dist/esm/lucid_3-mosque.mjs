export const name="lucid_3-mosque";
export const id="dl_1462941e6c1641e79ee2";
export const url=new URL("../icons/lucid_3-mosque.svg?v=bf5e5ba87fbad4ca69ecc4baec3eb6b7d45831fadf0b9eac56083a50eff46d79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
