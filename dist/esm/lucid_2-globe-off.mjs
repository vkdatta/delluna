export const name="lucid_2-globe-off";
export const id="dl_5c54e6568ea8446e8193";
export const url=new URL("../icons/lucid_2-globe-off.svg?v=56bdd2004a762bea76def5efb1324eb1021a5e83b23a4190490b971f922de534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
