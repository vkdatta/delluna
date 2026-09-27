export const name="lucid_1-cloud-rain-wind";
export const id="dl_7b36e10e047644b195f8";
export const url=new URL("../icons/lucid_1-cloud-rain-wind.svg?v=b0e9bd0344ceefd1b3c6f2fcad455dd00c3dd596a5f318c09723f5adca63c560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
