export const name="lte_plus_mobiledata-fill";
export const id="dl_71fd328ba7edfa1d9fae";
export const url=new URL("../icons/lte_plus_mobiledata-fill.svg?v=6fe6e2c5b93c3804ef46936ecf1d0b500ac524513537f5da6b135ddc47a5dafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
